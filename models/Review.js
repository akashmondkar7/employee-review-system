const reviewSchema = new mongoose.Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    assignedReviewers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],

    feedbacks:[
        {
            reviewer:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
            comment:String
        }
    ]
});

module.exports = mongoose.model("Review", reviewSchema);