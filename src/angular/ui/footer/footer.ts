import { Component } from '@angular/core';

@Component({
    selector: 'my-footer',
    styles: [`
		
                .my-footer {
            

                        height: 40px;
                        background:#455A64;
                        
		}
                .angular-span{
                 }
                
	`],
    template: `
    <footer class="page-footer my-footer">
    </footer>
    `
})

export class MyFooter {
    constructor(){
        
    }
}




