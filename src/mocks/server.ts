import { setupServer } from "msw/node";
import { handlres } from "./handlres";

export const server = setupServer(...handlres);
