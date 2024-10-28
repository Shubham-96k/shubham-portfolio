import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faDownload, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import * as Aos from 'aos';
@Component({
  selector: 'app-heroimg',
  templateUrl: './heroimg.component.html',
  styleUrls: ['./heroimg.component.css']
})
export class HeroimgComponent implements OnInit {

  constructor(private elRef: ElementRef) { }
  faLinkedin = faLinkedin
  faGithub = faGithub
  faDownload = faDownload
  fabars = faBars
  facross = faTimes
  ngOnInit(): void {
    Aos.init()
  }

  navItems = [
    { label: 'About', section: 'about', href: '#about' },
    { label: 'Work', section: 'work', href: '#work' },
    { label: 'Skills', section: 'skills', href: '#skills' },
    { label: 'Projects', section: 'projects', href: '#projects' },
    { label: 'Contact', section: 'contact', href: '#contact' },
  ];
  scrollToSection(section: string) {
    document.getElementById('navbarSupportedContent')?.classList.remove('show')
    this.isNavbarOpen = !this.isNavbarOpen;
  }
   

  isNavbarOpen = false;
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const eightyPercentViewportHeight = viewportHeight * 0.9;

      const navbar = this.elRef.nativeElement.querySelector('#mainnavbar');
      if (scrollPosition > eightyPercentViewportHeight) {
        navbar.style.background = 'linear-gradient(25deg, var(--color-gradient))';
        navbar.style.position = 'fixed';
      } else {
        navbar.style.background = '';
        navbar.style.position = 'static';
      }
    }
}
