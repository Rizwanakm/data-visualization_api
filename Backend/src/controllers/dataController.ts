import { Request, Response } from "express";
import Data, { IData } from "../models/Data";
import { io } from "../server";

export const getData = async (req: Request, res: Response): Promise<void> => {
  const items: IData[] = await Data.find();
  res.json(items);
};

export const addData = async (req: Request, res: Response): Promise<void> => {
  const item = new Data(req.body);
  await item.save();

  // Emit real-time update
  io.emit("newData", item);

  res.status(201).json(item);
};
