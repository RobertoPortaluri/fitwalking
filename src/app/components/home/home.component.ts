import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    { title: '📅 Appuntamenti', route: '/appuntamenti', description: 'Quando ci troviamo' },
    { title: 'ℹ️ Info', route: '/info', description: 'Chi siamo e come partecipare' },
    { title: '🤝 Sponsor', route: '/sponsor', description: 'I nostri partner' },
    { title: '📞 Contattaci', route: '/contattaci', description: 'Scrivici' },
    { title: '📸 Galleria', route: '/foto', description: 'Le nostre foto' }
  ];
}
