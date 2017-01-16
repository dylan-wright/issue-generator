// issue-generator
// dylan@dcwright.xyz
var fs = require('fs');
var figlet = require('figlet');
var imageToAscii = require('image-to-ascii');
var Q = require('q');

const HELP_MSG = 'write me please';

function main(argv) {
  var config;

  // process arguments
  if (argv.length !== 0) {
    config = processArgs(argv.slice(2));
  } else {
    printHelp();
  }

  // generate the issue text
  generateIssue(config).then(data => {
    console.log(data);
  });
}

/**
 * Returns the generated issue text
 * @param {Object}  config
 * @param {Object}  config.image
 * @param {string}  config.file
 * @param {Object}  config.text
 * @param {string}  config.data
 * @param {number}  config.width
 * @param {boolean} config.border
 * @returns {Promise} which resolves to final text
 */
function generateIssue(config) {
  var out = [];
  var deferred = Q.defer();
  var header = '+' + '-'.repeat(config.width-2) + '+\n';
  var footer = '\n+' + '-'.repeat(config.width-2) + '+';

  if (config.image) {
    config.image.out = generateImage(config.image.file,
                                     config.width,
                                     config.border);
    out.push(config.image.out);
  }
  if (config.text) {
    var i;
    var words = config.text.data.split(' ');

    for (i = 0; i < words.length; i++) {
      out.push(generateText(words[i], config.width, config.border));
    }
  }

  Q.all(out).then(data => {
    var textOut = "";
    textOut = data.join('\n');

    if (config.border) {
      textOut = header + textOut + footer;
    }

    deferred.resolve(textOut);
  });

  return deferred.promise;
}

/**
 * returns the generated image text
 * @param {string}  imageFile
 * @param {number}  width
 * @param {boolean} border
 * @returns {Promise} which resolves to the image text
 */
function generateImage(imageFile, width, border) {
  var deferred = Q.defer();
  var useWidth = width;

  // border takes up one character before and after
  if (border) {
    useWidth -= 2;
  }

  imageToAscii(imageFile, { 
    colored: false,
    size: {
      width: useWidth/2
    }
  }, (err, converted) => {
    if (err) {
      deferred.reject(new Error(err));
    } else {
      // border adds '|' before and after
      if (border) {
        var convertedList = converted.split('\n');
        for (var i = 0; i < convertedList.length; i++) {
          convertedList[i] = '|' + convertedList[i] + '|';
        }
        converted = convertedList.join('\n');
      }

      deferred.resolve(converted);
    }
  });

  return deferred.promise;
}

/**
 * returns the generated text text
 * @param {string}  text - space seperated words to be ascii'd
 * @param {number}  width
 * @param {boolean} border
 * @returns {Promise} which resolves to the text
 */
function generateText(text, width, border) {
  var deferred = Q.defer();

  figlet(text, (err, data) => {
    if (err) {
      deferred.reject(new Error(err));
    } else {
      deferred.resolve(centerItem(data, width, border));
    }
  });

  return deferred.promise;
}

/**
 * centers the item
 * @param {string}  item - newline seperated lines
 * @param {number}  width
 * @param {boolean} border
 * @returns {string} padded string (with newlines)
 */
function centerItem(item, width, border) {
  var longestLine = 0;
  var lines = item.split('\n');
  var useWidth = width;
  var i;
  var pre, post;

  if (border) {
    useWidth -= 2;
    pre = '|';
    post = '|';
  } else {
    pre = '';
    post = '';
  }

  // pad based on screen width and line width
  // round the post up to handle odd lengths
  pre = pre + ' '.repeat((useWidth/2 - lines[0].length/2));
  post = ' '.repeat(Math.round(useWidth/2 - lines[0].length/2)) + post;
  
  // pad the lines
  for (i = 0; i < lines.length; i++) {
    lines[i] = pre + lines[i] + post;
  }

  return lines.join('\n');
}

/**
 * processes command line arguments
 * @param {string[]}  argv - include node and file
 * @returns {Object} config object
 */
function processArgs(argv) {
  // set defaults
  var obj = {
    width: 80,
    border: true
  };
  var i = 0;
  var stdinText = false;
  var unmatchedTokens = [];

  while (i < argv.length) {
    if (argv[i] === '--image') {
      unmatchedTokens = [];

      if ((i + 1) < argv.length) {
        obj.image = {
          file: argv[i+1]
        };
      } else {
        printHelp('Missing argument: image file');
        throw new Error('Missing argument: image file');
      }

      i += 2;
    } else if (argv[i] === '--text') {
      unmatchedTokens = [];

      if ((i + 1) < argv.length) {
        if (argv[i+1] === '-') {
          stdinText = true;
          obj.text = {};
        } else {
          obj.text = {
            file: argv[i+1]
          };

          fs.readFile(obj.text.file, 'utf8', (err, data) => {
            if (err) {
              printHelp('Error reading text file');
              throw err;
            }

            obj.text.data = data;
          });
        }
      } else {
        printHelp('Missing argument: text input source');
        throw new Error('Missing argument: text input source');
      }

      i += 2;
    } else if (argv[i] === '--width') {
      if ((i + 1) < argv.length) {
        obj.width = Number(argv[i+1]);
      }

      i += 2;
    } else if (argv[i] === '--no-border') {
      obj.border = false;

      i += 1;
    } else {
      unmatchedTokens.push(argv[i]);
      i += 1;
    }
  }

  if (stdinText) {
    obj.text.data = unmatchedTokens.join(' ');
  }

  return obj;
}

/**
 * prints help message in case of parse error
 * @param {string} err - an error message
 */
function printHelp(err) {
  console.log(err);
  console.log(HELP_MSG);
}

main(process.argv);
