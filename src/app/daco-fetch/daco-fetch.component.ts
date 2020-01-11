import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DcFormatListItem } from '../dcFormatList';
import { ContentChoice } from '../contentChoice';
import { SkuFormat } from '../skuFormat';
import { FormatDetail } from '../formatDetail';
import {Observable,forkJoin } from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
// call http api dacoFetch0, set global myDcFormatArray1
// dacoFetchComponent gets called by _____.
@Component({
  selector: 'app-daco-fetch',
  templateUrl: './daco-fetch.component.html',
  styleUrls: ['./daco-fetch.component.scss']
})
export class DacoFetchComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log('init DacoFetchComponent')
    this.getDacoData() // http fetch all the tables
  }
  // loadedCharacter: {};
  @Input() msgFromParent: string;
  @Input() count: number = 0
  @Input() countCc: number = 0
  @Output() myDcFormatArray1:DcFormatListItem[]
  @Output() myDcContentArray0:ContentChoice[] 
  @Output() myDcSkuFormatArray0:SkuFormat[] 
  @Output() myDcFormatDetailsArray0:FormatDetail[] 
  //@Output() change: EventEmitter<number> = new EventEmitter<number>();
  @Output() binder6 = new EventEmitter(); //flag for fetchDone yn
  @Output() binder1 = new EventEmitter();
  @Output() binder2 = new EventEmitter(); //http dacoFetch dacoFormat  data
  @Output() binder3 = new EventEmitter(); //http dacoFetch dacoContent  data
  @Output() binder4 = new EventEmitter(); //http dacoFetch dacoSkuLayerFormat  data
  @Output() binder5 = new EventEmitter(); //http dacoFetch dacoSkuFormatDetail  data
  //myDcFormatArray2:DcFormatListItem[]
  //selectedDF = new DcFormatListItem;
  //dacoObservable: Observable<any[]>;
  //miscArray1 = []
  dPath1 = 
  'https://mz7sh2eha2.execute-api.us-east-1.amazonaws.com/default/dacoFetch0?TableName=dacoFormat';
  dPath2 = 
  'https://mz7sh2eha2.execute-api.us-east-1.amazonaws.com/default/dacoFetch0?TableName=dacoContent';
  dPath3 = 
  'https://mz7sh2eha2.execute-api.us-east-1.amazonaws.com/default/dacoFetch0?TableName=dacoSkuLayerFormat';
  dPath4 = 
  'https://mz7sh2eha2.execute-api.us-east-1.amazonaws.com/default/dacoFetch0?TableName=dacoFormatDetail';
  fetchDone = 'n'
    // dacoFetch(){ 
    //   console.log('run dacoFetch')
    //   this.count = 0
    //   this.countCc = 0
    //   this.binder1.emit(this.count);
    //   this.initMyArrays()
    //   // this.dacoHttpDfSubscribe()
    //   // this.dacoHttpCcSubscribe()
    // }
  
  // initMyArrays() {
  //   this.myDcFormatArray1 = []
  //   this.myDcContentArray0 = []
  // }
  // [
  //   { id: 11, dfFormatKey: '357', dfFormatName: 'lit,t1,more', dfFormatDesc: 'lit,lot,more', dfFilterInOut: 'init', dfUsageCount: 222 },
  //   { id: 12, dfFormatKey: '358', dfFormatName: 'lit,exp', dfFormatDesc: 'lit,exp', dfFilterInOut: 'init', dfUsageCount: 222 },
  //   { id: 13, dfFormatKey: '359', dfFormatName: 'lit,t2', dfFormatDesc: 'lit,lot', dfFilterInOut: 'init', dfUsageCount: 222 },
  //   { id: 14, dfFormatKey: '360', dfFormatName: 'lit,exp', dfFormatDesc: 'lit,exp', dfFilterInOut: 'out', dfUsageCount: 222 }
  // ];     
 
  // fetchDacoOld2(){ // returns an observable.  do we really want one? does httpclient force us?
  //   //   call web api to fetch dacoFormat data  ... httpClient with .subscribe with my callback handleHttpComplete
  //   //   clue --- old example of .pipe & map work if you have async await in html
  //   //   but instead, we gotta use .subscribe
  //   //  what we really want -- an array from the http call.
  //   //    observable  is confusing cuz it acts like a stream, and apparently needs to be finalized via a callback.
  //   //this.dacoObservable = 
  //   return  this.http.get<{Items: any[]}>(this.dPath1)
  //       .pipe( map(x => x.Items))
  // } //end fetchDaco
  /////////////////////////////////////////////
//   dacoHttpDf(){
//   return  this.http.get<{Items: any[]}>(this.dPath1)
//             .pipe( map(x => x.Items))
//   } //end dacoHttpDf
//   dacoHttpDfSubscribe() {
//     this.dacoHttpDf()    
//       .subscribe((data:any) => {
//         this.handleHttpDfDataStream(data)        
//       }, (err) => {
//         this.handleHttpDfError(err);
//       }, () => { 
//         this.handleHttpDfComplete();
//       });
//   } //end dacoHttpDfSubscribe
//   handleHttpDfDataStream(dataStreamParmIn){
//     for (const d of (dataStreamParmIn as any)) {
//       this.myDcFormatArray1.push(
//         {
//         id: d.formatKey,
//         dfFormatKey: d.formatKey,
//         dfFormatName: d.formatName,
//         dfFormatDesc:  '?',
//         dfFilterInOut: 'init',
//         dfUsageCount:  0
//         }
//       );
//       this.count++ // counts how many dacoFormat array rows we fetched via http
//     }  
//   }
//   handleHttpDfError(errParmIn){console.log(errParmIn)}
//   handleHttpDfComplete(){
//     console.log('run handleHttpDfComplete')
//     this.binder1.emit(this.count);
//     this.binder2.emit(this.myDcFormatArray1); 
//   } //end handleHttpDfComplete
// /////////////////////////////////////////////
// dacoHttpCc(){
//   return  this.http.get<{Items: any[]}>(this.dPath2)
//             .pipe( map(x => x.Items))
//   } //end dacoHttpCc
//   dacoHttpCcSubscribe() {
//     this.dacoHttpCc()    
//       .subscribe((data:any) => {
//         this.handleHttpCcDataStream(data)        
//       }, (err) => {
//         this.handleHttpCcError(err);
//       }, () => { 
//         this.handleHttpCcComplete();
//       });
//   } //end dacoHttpCcSubscribe
//   handleHttpCcDataStream(dataStreamParmIn){
//     for (const d of (dataStreamParmIn as any)) {
//       this.myDcContentArray0.push(
//         {
//         id: 77,
//         contentName: d.contentName,
//         contentType: '?',
//         contentMask: '?',
//         contentUsageCount: 0
//         }
//       );
//       this.countCc++ // counts how many dacoContent array rows we fetched via http
//     }  
//   }
//   handleHttpCcError(errParmIn){console.log(errParmIn)}
//   handleHttpCcComplete(){
//     console.log('run handleHttpCcComplete')
//     //this.binder1.emit(this.count);
//     this.binder3.emit(this.myDcContentArray0); 
//   } //end handleHttpCcComplete
/////////////////////////////////////////////
  getDacoData(){
    // call http for four tables.  forkJoin results of four table reads.  
    // Transform from database layout, into local array rec layouts.
    console.log('run getDacoData')
    this.fetchDone = 'n'
    this.myDcFormatArray1 = []
    this.myDcContentArray0 = []
    this.myDcSkuFormatArray0 = []
    this.myDcFormatDetailsArray0 = [] 
    let zzFormat:Observable<any> =  this.http.get<{Items: any[]}>(this.dPath1)
                                       .pipe( map(x => x.Items))
    let zzContent:Observable<any> =  this.http.get<{Items: any[]}>(this.dPath2)
                                       .pipe( map(x => x.Items))
    let zzSkuFormat:Observable<any> =  this.http.get<{Items: any[]}>(this.dPath3)
                                       .pipe( map(x => x.Items))
    let zzSkuFormatDetail:Observable<any> =  this.http.get<{Items: any[]}>(this.dPath4)
                                       .pipe( map(x => x.Items))

    forkJoin([zzFormat, zzContent, zzSkuFormat, zzSkuFormatDetail]).subscribe(forkJoinResults => {
      // console.log(forkJoinResults[0])
      this.transformAndEmitFetchedFormats(forkJoinResults[0])
      this.transformAndEmitFetchedContents(forkJoinResults[1])
      this.transformAndEmitFetchedSkuFormats(forkJoinResults[2])
      this.transformAndEmitDacoFormatDetails(forkJoinResults[3])
      this.fetchDone = 'y'
      this.binder6.emit(this.fetchDone); 
    });
    
  }
/////////////////////////////////////////////
transformAndEmitFetchedFormats(forkedFormats){
    for (const d of (forkedFormats as any)) {
             this.myDcFormatArray1.push(
               {
              id: d.formatKey,
              dfFormatKey: d.formatKey,
              dfFormatName: d.formatName,
              dfFormatDesc:  '?',
              dfFilterInOut: 'init',
              dfUsageCount:  0
              }
            );
     }
     this.binder2.emit(this.myDcFormatArray1); //  from formatArray from http
  }
/////////////////////////////////////////////
transformAndEmitFetchedContents(forkedContents){
  for (const d of (forkedContents as any)) {
           this.myDcContentArray0.push(
            {
                      id: 77,
                      contentName: d.contentName,
                      contentType: '?',
                      contentMask: '?',
                      contentUsageCount: 0
                      }
          );
   }
   this.binder3.emit(this.myDcContentArray0); //  from formatArray from http
}
/////////////////////////////////////////////
transformAndEmitFetchedSkuFormats(forkedSkuFormats){
  for (const d of (forkedSkuFormats as any)) {
           this.myDcSkuFormatArray0.push( 
            {
                      id: 77,
                      sfSku:  d.sku,
                      sfLayer: d.layer,
                      sfFormatKey: d.formatKey,
                      sfFilterInOut: 'init'
                      }
          );
   }
   this.binder4.emit(this.myDcSkuFormatArray0); //  from skuFormatArray from http
}
/////////////////////////////////////////////
transformAndEmitDacoFormatDetails(forkedFormatDetails){
  for (const d of (forkedFormatDetails as any)) {
           this.myDcFormatDetailsArray0.push( 
            {
                id: 77,
                fdRow: d.row,
                fdRowSlot: d.rowSlot,
                fdFormatKey: d.formatKey,
                fdContentName: d.contentName,
                fdMask: d.mask,
                fdFilterInOut: 'init'
             }
          );
   }
   this.binder5.emit(this.myDcFormatDetailsArray0); //  from skuFormatArray from http
}
/////////////////////////////////////////////
  // launchDacoFetch() {
  //   console.log('run launchDacoFetch.');
  //   //this.count++;
  //   //this.dacoFetch()
  // } // end launchDacoFetch
} // end DacoFetchComponent
