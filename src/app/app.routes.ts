import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { FotoComponent } from './components/foto/foto.component';
import { AppuntamentiComponent } from './components/appuntamenti/appuntamenti.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { ContattaciComponent } from './components/contattaci/contattaci.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appuntamenti', component: AppuntamentiComponent },
  { path: 'info', component: InfoComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'contattaci', component: ContattaciComponent },
  { path: 'foto', component: FotoComponent }
];
