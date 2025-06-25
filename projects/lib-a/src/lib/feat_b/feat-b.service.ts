import { inject, Injectable } from "@angular/core";

import { FeatBConfigOptions } from "./feat-b-config-options";
import { LibAService } from "../lib-a.service";

@Injectable({
  providedIn: "root",
})
export class FeatBService {
  readonly options: FeatBConfigOptions = inject(LibAService).options.featB;

  constructor() {}

  printConfig() {
    console.log("FeatBService options:", this.options);
  }
}
