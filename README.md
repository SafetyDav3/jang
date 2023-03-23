# J.A.N.G.
## Just Another NFT Generator

To use this application need to first create your layers in Photoshop and group them into folders according to the potential layer catagories.
<br>
<br>
# Sources
This is a JavaScript program that generates NFTs (Non-Fungible Tokens) by combining multiple layers of images. It uses the following dependencies:

* merge-images to merge the images.<br>
* node-canvas to create a canvas for the merged images.<br>
* path and fs for file system operations.<br>
* random-js for random number generation.<br>
<br>
# Run program
After the layers are in there own folders run <mark>node index.js</mark>
<br>
This will create a series of images from the layers in a <mark>.png</mark> format and place them in the <mark>output/images</mark> folder. At the same time the associated metadata will be placed in the <mark>output/metadata</mark> folder.
<br> 
<br> 
Next you create a collection at an IPFS service and collect the <mark>http://ipfs...</mark> style address and CID. You then put this information into the <mark>update.js</mark> file and run it with <mark>node update.js</mark>.
<br> 
This will then change the metadata sequentially according to the file name.
