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

## Example
Heres an example. Thats me!

```
node index.js --image images/me.png --text - dcwright xyz
```

```
+------------------------------------------------------------------------------+
|fffCC1;;;;;;;;;;;;;;;;;;iiiiiiiiiiii1ii111ii111111iiiiiiiiiiiiiiiiiiiiiiiiiiii|
|fffCC1;;;;;;;;;;;;;;;;;;iiiiiiiiii111ii111iiii1111iiiiiiiiiiiiiiiiiiiiiiii;;;;|
|fffCCt;;;;;;;;;;;;;;;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;i;;i;;;|
|fffCGt;;;;;;;;;;;;;;;iiiiii;;iiii;;;iiiiiiiiiiii;;iiiiiiii;;;;;;;;;;;;;;;;;;;;|
|fffCGti;;;;;;;;;;;;;i;;;;;;;;;;;;;;iiiiiiiiiiiiiiiiiiiii11ii;;;;;;;;;;;;;;;;;;|
|fffCGti;;;;;;;;;;;;;;;;;;;;;;;;;;iiiiiii;iiiiii;;iiiiiiii1iiii;;;;;;;;;;;;;;;;|
|fffLGti;;;;;;;;;;;;;;;;;;;;;;;;;;;ii;ii;;;iiiiiiiiiiiii;iiiiiii;;;;;;;;;;;;;;;|
|fffLGfi;;;;;;;;;;;;;;;;;;;;;;;;;;;;i;iii;;i;iiii1i;ii;;;;;iiiii;;;;;;;;;;;;;;;|
|fffLGfi;;;;;;;;;;;;;;;;;;;;;;iii;iiiiiiiii;;;;;;;;;;;;;;i;;iiiiii;;;;;;;;;;;;;|
|fffLGfi;;;;;;;;;;;;;;;;;;iiii111iiii1111111ii;;;;;;;;;;;i;;;;iiii;;;;;;;;;;;;;|
|fffLGf1;;;iii;;;;;;;;;;;;iii11ttttttfLLLLLLLft1iiii;ii;;iii;;iiii;;;;;;;;;;;;;|
|ffffGL1;;;iii;;;;;;;;;;ii111ttfLLLLLLLCGGGGCCCCLft111111i;;iiiiiiiiiiiiiiiiiii|
|LtffGL1;;;iii;;;;;;;iiii1tttffLCCCCCCCCGGGGGGGGCCCLfttfft1;iiiiiiiiiiiiiiii1ii|
|LtffGL1;;;;i;;;;;;;iiiii1tttfLLCCCGGGCCGGGGGGGGGCCCCLfffftiiiiiiiiiiiiiiiiiiii|
|LtffCC1;;;;i;;;;;;iiiiii111tfLLCCCGGGGGGGGGGGGGGGCCCCLLfff1iiiiiiiiiiiiiiiiiii|
|LtffCC1i;;;i;;;;;;iiiiiiii1fLLLCCGGGGGGGGGGGGGGGGGCCCCLLff1iiiiiiiiiiiiiiiiiii|
|CfffCCti;;iii;;;;;;iiiiitfLLLLCCCGGGGGGGGCCGGGGGGCCCCLLLLf1iiiiiiiiiiiiiiiiiii|
|CftfCCti;;;;;;;;;;iiii1fLLLLLLLLLLLLfffffLLCCCCCCLLLCCCCLfiiiiiiiiiiiiiiiiiiii|
|CfffCCti;;;;1tfti;iiiitLLLLLfftttt1111111ttfLCCLfftttfLLLfiiiiiiiiiiiiiiiiiiii|
|CftfLCti;;;1t11t11iiiifLLLLLLft1111ii1L11ffLCCCf1iiii11tttiiiiiiiiiiiiiiiiiiii|
|CftfLCti;ii1LffLf1iii1fLLLLCCCCLLffffffffLLCGGCfiiiit1i111iiiiiiiiiiiiiiiiiiii|
|CfttLCti;iiitLLCf11t11tfLLCCCGGGGCCLLLLCCCCCGGGfffttftiit1iiiiiiiiiiiiiiiiiiii|
|CfttLGfi;iiiitLLLLftt11ffLCCCCGGGGGGGGGGGCCCCGGLLLffttfftiiiiiiiiiiiiiiiiiiiii|
|CfttfGfi;iiiiitLCLLft11tfLLCCCCCGGGGGGGGCCCCCGGLLCCLLLLLfiiiiiiiiiiiiiiiiiiiii|
|CfttfCfi;iiiiii1tfLLf1ttffLLLCCCCCGGGGCCLLLCGGGLfLCCCCLLfiiiiiiiiiiiiiiiiiiiii|
|CfttfCfi;iiiiiiiiii111ttffffLLLLCCCCCLLfLCCCGGGCLLCCCLLL1iiiiiiiiiiiiiiiiiiiii|
|CLttfCL1;iiiiiiiiii111ttffffffLLLLLLLCCfttttfLLffLLCLLftiiiiiiiiiiiiiiiiiiiiii|
|CLttfCL1i;;iiiiiii11t1tttffffffLLfLLLCCCf11ii111tfLLfftiiiiiiiiiiiiiiiiiiiiiii|
|CLttfCL1;;;iiiiiii1tt1ttttffffLLLft1ttffffft1i1ttffftti;iiiiiiiiiiiiiiiiiiiiii|
|CLtttCL1i;;iiiiiii1tt11ttttffffLLLLLfttttttt1ii11tftti;iiiiiiiiiiiiiiiiiiiiiii|
|CLtttCL1i;;iiiiiiittt1i111tttffLLLCCCCLLLLfftt111ttti;iiiiiiiiiiiiiiiiiiiiii;;|
|LLtttLC1i;;iiiiii1ftt1ii111tfffLLLCCCCCCLLffffffttti;;;;;iiiiiiiiiiiiii;;;;;;;|
|CCtttLL1i;;;;ii1ttfttt1iii11tffLLLCCLLLLCLLLfffft1i;;;;;;;;;;;;;;;;;;;;;;;;;;;|
|LL1iii;;;;;1ffffffffftt1ii;i1ttfLLLLCLLLLLLffftt1i;;;;;;;;;;;;;;;;;;;;;;;;;;;;|
|;;;;;;;;;;;iLLfffffffftt11ii;;i1tfLLLLLfLLfffff1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|
|;;;;;;;;;;;:;tffffffffftt11iii;;;i111t11tttttti;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|
|;;;;;;;;;;;;;;itfLffffffttt1iiii;;;::;;;;;;ii;:::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|
|;;;;;;;;;;;;;;::i1tffffffttt11iiiiii;;;;;;;::::::::::;;;;;;;;;;;;;;;;;;;;;;;;;|
|;;;;;;;;;;::;;;;:::;i1tfffttt11iiiiiii1111;:::::::::::::::;;;;;;;;;;;;;;;;;;;;|
|                      _                    _       _     _                    |
|                   __| | _____      ___ __(_) __ _| |__ | |_                  |
|                  / _` |/ __\ \ /\ / / '__| |/ _` | '_ \| __|                 |
|                 | (_| | (__ \ V  V /| |  | | (_| | | | | |_                  |
|                  \__,_|\___| \_/\_/ |_|  |_|\__, |_| |_|\__|                 |
|                                             |___/                            |
|                                                                              |
|                               __  ___   _ ____                               |
|                               \ \/ / | | |_  /                               |
|                                >  <| |_| |/ /                                |
|                               /_/\_\\__, /___|                               |
|                                     |___/                                    |
+------------------------------------------------------------------------------+
```
