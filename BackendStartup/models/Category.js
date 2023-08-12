const mongoose=require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique:true
    },
    subCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
      },
    ],
    description: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // Add other necessary fields for Category
  }, {
    timestamps: true, // Add this option to enable timestamps
  });


  const Category = mongoose.model('Category', categorySchema);

  module.exports=Category