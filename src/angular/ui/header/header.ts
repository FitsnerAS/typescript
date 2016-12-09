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
                        background:#607D8B;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
		}
                .angular-span{
                    position:relative;
                    font-size:26px;
                    color:#fff;
                    margin:30px;
                    top:30px;
                    font-family: Roboto, "Helvetica Neue", sans-serif;
                }
	`],
    template: `
    <div class='my-header'>
        <span class="angular-span">Angular2</span>
    </div>
    
    `
})

export class MyHeader {
    constructor(){
    }
}




