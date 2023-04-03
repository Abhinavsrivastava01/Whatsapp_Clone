import Conversation from "../model/Conversation.js";

export const newConversation=async(request,response)=>{
     try{
          let senderId = request.body.senderId;
          let receiverId = request.body.receiverId;
          const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
          if(exist) {
               return response.status(200).json('conversation already exists');
               
           }
           const newConversation = new Conversation({
               members: [senderId, receiverId]
           });
           await newConversation.save();
           return response.status(200).json('conversation saved successfully');
     }
     catch(error){
     return response.status(500).json(error.message);
     }
}
export const getConversation = async (request, response) => {
     try { let senderId = request.body.senderId;
          let receiverId = request.body.receiverId;
         let conversation = await Conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
         response.status(200).json(conversation);
     } catch (error) {
         response.status(500).json(error);
     }
 
 }