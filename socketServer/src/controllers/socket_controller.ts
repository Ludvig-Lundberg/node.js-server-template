import Debug from "debug";
import { Socket, Server } from "socket.io";
import * as dotenv from "dotenv";
import { ClientToServerEvents, ServerToClientEvents } from "../../../types/socketTypes";
dotenv.config();

export const handleConnection = (socket: Socket<ClientToServerEvents, ServerToClientEvents>, io: Server<ClientToServerEvents, ServerToClientEvents>) => {
	console.log(`User ${socket.id} connected`);
};
