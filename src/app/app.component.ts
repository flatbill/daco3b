import { Component,ViewChild } from '@angular/core';
import { DcFormatListItem } from './dcFormatList';
import { ContentChoice } from './contentChoice';
import { SkuFormat } from './skuFormat';
import { FormatDetail } from './formatDetail';
import {ContentChoicesComponent} from './contentChoices.component';


//import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ContentChoicesComponent, {static: false})
     private myChild: ContentChoicesComponent;
  myTitle = 'dacoTitle';
  globalDcFormatArray0: DcFormatListItem[] //passed between components  
  globalDcContentArray0: ContentChoice[] //passed between components  
  globalDcSkuFormatArray0: SkuFormat[] //passed between components  
  globalDcFormatDetailArray0: FormatDetail[]

  myCount: number = 100000000
  parentFun1(event){
    this.myCount = event;
  }

  parentFun2(dfArraryParmIn){
    // parentFun wakes up when the child emits.
    // child daco-fetch has passed us an array fetched from http data
    this.globalDcFormatArray0 = dfArraryParmIn
    console.log('woke up parentFun2')
    console.log('len of globalDf is ' + this.globalDcFormatArray0.length)
    //console.log('len of globalCc is ' + this.globalDcContentArray0.length)

    //console.log(JSON.stringify(this.globalDcFormatArray0))
    // alert(this.myCount)
  }
  parentFun3(ccArraryParmIn){
    // parentFun wakes up when the child emits.
    // child daco-fetch has passed us an array fetched from http data
    this.globalDcContentArray0 = ccArraryParmIn
    console.log('woke up parentFun3')
    console.log('len of globalCc is ' + this.globalDcContentArray0.length)
  }
  parentFun4(sfArrayParmIn){
    // parentFun wakes up when the child emits.
    // child daco-fetch has passed us an array fetched from http data
    this.globalDcSkuFormatArray0 = sfArrayParmIn
    console.log('woke up parentFun4')
    console.log('len of globalSf is ' + this.globalDcSkuFormatArray0.length)
  }
  parentFun5(fdArrayParmIn){
    // parentFun wakes up when the child emits.
    // child daco-fetch has passed us an array fetched from http data
    this.globalDcFormatDetailArray0 = fdArrayParmIn
    console.log('woke up parentFun5')
    console.log('len of globalFd is ' + this.globalDcFormatDetailArray0.length)
  }
  parentFun6(fetchDoneParmIn){
    // parentFun wakes up when the child emits.
    // child daco-fetch has passed us an array fetched from http data
    console.log('woke up parentFun6')
    console.log('fetchDoneParmIn is ' + fetchDoneParmIn)
    console.log('len of globalFd is ' + this.globalDcFormatDetailArray0.length)
    console.log('calling the Kraken... ' ) //stupid child @Input ignores this nice fresh global data
    this.myChild.releaseTheKraken()

  }
  
}
