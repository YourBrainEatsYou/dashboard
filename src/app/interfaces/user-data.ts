import { Squad } from "@/interfaces/squad";

export interface UserData {
  id: string,
  avatar: string,
  squad?: Squad,
  username: string
}
