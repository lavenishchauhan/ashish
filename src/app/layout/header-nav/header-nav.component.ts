import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styles: []
})
export class HeaderNavComponent implements OnInit {
  isLogin:boolean;
  loginForm;
  
  constructor(
    private authService: AuthService,  
    private productService: ProductService,
    private modalService: NgbModal) { 

      // Bootstrap Model Animation Effect
      NgbModalRef.prototype['c'] = NgbModalRef.prototype.close;
      NgbModalRef.prototype.close = function (reason: string) {
        document.querySelector('.modal-backdrop').classList.remove('show');
        document.querySelector('.modal').classList.remove('show');
        setTimeout(() => {
          this['c'](reason);
        }, 300);
      };
      NgbModalRef.prototype['d'] = NgbModalRef.prototype.dismiss;
      NgbModalRef.prototype.dismiss = function (reason: string) {
        document.querySelector('.modal-backdrop').classList.remove('show');
        document.querySelector('.modal').classList.remove('show');
        setTimeout(() => {
          this['d'](reason);
        }, 300);
      };
      // End Bootstrap Model Animation Effect

    }


  ngOnInit() { 
   // console.log(this.productService.buyItem());
  }


  registerModal(content) {
    this.modalService.open(content)
  }

  loginModal(login,register){
    this.loginForm  = this.modalService.open(login);
   // this.loginForm.close(register);
  }


  formOpen(login,register){
    this.modalService.open(login, {ariaLabelledBy: 'modal-basic-title'})
  }










}
