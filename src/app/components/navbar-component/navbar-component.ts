import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';


interface menuItem {
  label: string;
  route: string;
}

@Component({
  imports: [CommonModule, RouterLink],// Adicione RouterLink aqui se for usar o roteamento do Angular
  standalone: true,
  selector: 'app-navbar-component',
  styleUrl: './navbar-component.css',
  templateUrl: './navbar-component.html',
})


export class NavbarComponent {

  // Controla o menu hambúrguer no mobile
  isMenuOpen = false;

  // Controla a abertura do dropdown de sub-itens
  isDropdownOpen = false;
  

   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

 toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
