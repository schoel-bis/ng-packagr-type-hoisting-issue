import { inject, Injectable } from "@angular/core";

import { FeatAConfigOptions } from "./feat-a-config-options";
import { LibAService } from "../lib-a.service";

@Injectable({
  providedIn: "root",
})
export class FeatAService {
  readonly options: FeatAConfigOptions = inject(LibAService).options.featA;

  constructor() {}

  printConfig() {
    console.log("FeatAService options:", this.options);
  }
}
