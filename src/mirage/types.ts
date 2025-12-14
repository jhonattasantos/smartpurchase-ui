import type { Registry } from "miragejs";
import factories from "./factories";
import models from "./models";

export type AppRegistry = Registry<typeof models, typeof factories>;

