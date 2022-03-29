import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
   
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
    

    //This enables drop downs to be closed by click anywhere but breaks the header and fucks up http stuff
    /*@HostListener('document:click', ['$event']) toggleOpen(event : Event){
       this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
   }

   constructor(private elRef : ElementRef){}*/
}