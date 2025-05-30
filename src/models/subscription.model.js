import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subsriber: {
        type: Schema.Types.ObjectId,// one who is subscribing
        ref: "User"
    },

    channel:{ 
        type:Schema.Types.ObjectId,
        ref: "User"
    }
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema)