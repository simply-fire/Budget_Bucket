const mongoose = require('mongoose');

const options = {useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 5000,
	autoIndex: false, // Don't build indexes
	maxPoolSize: 10, // Maintain up to 10 socket connections
	serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4 // Use IPv4, skip trying IPv6
}

async function main() {
	await mongoose.connect('mongodb://localhost:27017/Sample_User_db',options).then(console.log("Connected to DB"))
//	studentSchema.methods.log_user = function log_user(){
//		const msg = "New Student user" + this.name;
//		console.log(msg);
//	}
 }
const UserSchema = new mongoose.Schema({
	"username" : String,
	"email" : String,
	"psswd": String,
});

main().catch(err => console.log(err));
const User = mongoose.model("User", UserSchema);
module.exports = User;
