const mongoose=require('mongoose')

const subCategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique:true
    },
    description: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    image:{
        type:String,
        required:true
    },
    content:[
      {
        contentId:Number,
        contentTitle:String,
        contentDifficulty:String,
        contentType:String
      }
    ],
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
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


  const SubCategory = mongoose.model('SubCategory', subCategorySchema);

  module.exports=Subcategory