# Real-Time-Bus-Tracker

This project tracks the movement of Whatcom Transportation Authority's fixed route bus fleet and updates their locations in real time.

To run this program from your own machine, simply download the 3 files index.html, mapanimation.js, and styles.css, then drag index.html to your web browser of choice. If you intend to use this program regularly, please go to account.mapbox.com, create your own account and request a personal API key. Then, in mapanimation.js, change line 1 to use your own access key. Mapbox allows 50,000 free views per month per access key.

Roadmap of future improvements: Currently, the map fills up with about 20 vehicles that are sitting unused at a number of bus depots around Whatcom County. My first goal when optimizing this project is to dynamically add and remove vehicles from the map when they are between routes or out of service. Also, though the route numbers of each bus are visible by clicking on the marker, I would like to change this so that the marker itself is a visual indicator of the bus's route number. Finally, I intend to add functionality so that the user can pick a single bus line or bus stop, and see only the vehicles that service that line or stop.


The MIT License
Copyright 2022 Sam Dunlap <sdunlapwebdev@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
