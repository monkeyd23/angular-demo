import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { lookupLists } from './lookup-provider';
import { MediaitemService } from './media-item-service';
import { NgForm, FormGroup, FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'my-add-media',
  templateUrl: 'app/add-media.component.html',
  styleUrls: [
    'app/add-media.component.css'
  ]
})
export class AddMediaComponent extends OnInit{
    @ViewChild('mediaForm') newMediaForm: NgForm
    medium  = []
    category  = []

    // reactive Forms
    signupForm: FormGroup;

    constructor(private router: Router, private mediaService:MediaitemService){
      super();
    }
    
    ngOnInit(){
      this.medium = lookupLists.mediums;
      this.category = lookupLists.categories;
      // console.log('here in add media component', this.newMediaForm)

      // reactive Forms
      this.signupForm = new FormGroup({
        // FormControl(defaultvalue, validators, asyncValidator)
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required])
      })

    }

    // onSubmit(mediaForm: ElementRef){
    //   console.log(mediaForm)
    // }

    onSubmit(){
      const newFormObject = Object.assign({}, this.newMediaForm.value);
      this.mediaService.add(newFormObject);
      console.log( newFormObject, this.mediaService.get())
    }

    onReactiveFormSubmit(){
      console.log(this.signupForm.value)
    }

}