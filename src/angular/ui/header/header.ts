import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    styles: [`
		.my-header {
			position:absolute;
                        height: 200px;
                        top:0;
                        left:0;
                        right:0;
                        background:#607D8B
                        
		}
                .angular-span{
                    font-size:20px;
                    color:#fff;
                    margin:30px;
                }
	`],
    template: `
    <div class='my-header'>
        <span class="angular-span">Angular</span>
    </div>
    `
})

export class MyHeader {
    constructor(){
        
    }
}




