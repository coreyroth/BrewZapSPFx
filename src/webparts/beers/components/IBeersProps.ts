import { IBeer, BrewZapService } from './../../../services/brewZapService';

export interface IBeersProps {
  beers: IBeer[];
  brewZapService: BrewZapService;
}
