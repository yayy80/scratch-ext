(function() {
  // Define the extension name and ID
  var burritoExt = {
    name: "Burrito Extension",
    id: "burritoExt",
    
    // Define the blocks that this extension will provide
    blocks: [
      // Block to get the number of burritos eaten
      {
        opcode: "getBurritosEaten",
        blockType: Scratch.BlockType.REPORTER,
        text: "number of burritos eaten",
        arguments: {}
      },
      
      // Block to eat a burrito
      {
        opcode: "eatBurrito",
        blockType: Scratch.BlockType.COMMAND,
        text: "eat a burrito",
        arguments: {}
      }
    ],
    
    // Define the functions that correspond to the blocks
    getBurritosEaten: function() {
      return this.burritosEaten;
    },
    
    eatBurrito: function() {
      this.burritosEaten++;
    },
    
    // Initialize the burritosEaten variable to zero
    burritosEaten: 0
  };

  // Register the extension with Scratch
  Scratch.extensions.register(burritoExt);
})();
