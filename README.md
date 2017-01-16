# issue-generator
A tool for generating issue files with images and ascii fonts

## Usage
```
npm start -- [--text <source>] [--image <source>] [--width <width] [--no-border] [text ...]
```

Or 
```
node index.js ...
```

### Options
* `--text <source>` source can be:
..* `-` use unmatched text at end of command
..* file
* `--image <source>` source can be:
..* file
..* url
* `--width <width>` sets the width
* `--no-border` turns off border
