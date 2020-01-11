// import { Component, OnInit, Input } from '@angular/core';
// import { DcFormatListItem } from '../dcFormatList';
// import { FormatDetail } from '../formatDetail';
// import { FormatCompose } from '../formatCompose';
// import { SkuUsageCount } from '../skuUsageCount';
// // failed experiment Jan2020, too hard to split contentChoices into separate components


// @Component({
//   selector: 'app-catalog-list-set',
//   templateUrl: './catalog-list-set.component.html',
//   styleUrls: ['./catalog-list-set.component.scss']
// })
// export class CatalogListSetComponent implements OnInit {
//   dfHelpMsg = 'click + to expand a list';
//   dfListOn = false;
//   scListOn = false;
//   sfListOn = false;
//   fdListOn = false;
//   flListOn = false;
//   fmListOn = false;
//   // rethink these vars, should be global?
//   ccOn = true;  //rethink this
//   pgOn = true;  //rethink this
//   dpOn = false; //rethink this
//   ccDivHead = 'Content';
//   pgDivHead = 'Product Grid';
  
//   selectedDF: DcFormatListItem;
//   selectedFD: FormatDetail;
//   ///dcFormatArray1: DcFormatListItem[];
//   formatDetailArray0: FormatDetail[];  // raw list
//   formatDetailArray1: FormatDetail[];   // filtered list
//   formatDetailArray2: FormatDetail[];   // filtered list
//   formatComposeArray0: FormatCompose[];
//   fc: FormatCompose;
//   exampleDate = '20190731';
//   exampleExpDate = '20210731';
//   suFreqArray0: SkuUsageCount[];
//   myModal1Msg1 = 'modal1 header info goes here';
//   myModal1Msg2 = 'more modal1 info goes here';
//   dp1a = '';
//   dp1b = '';
//   dp1c = '';
//   dp1d = '';
//   dp2a = '';
//   dp2b = '';
//   dp2c = '';
//   dp2d = '';
//   constructor() {}
//   ngOnInit() {}
//   @Input() dcFormatArray1: DcFormatListItem[];  // filtered list
//   @Input() receivedMyFriend: string;
//  /////////////////////////////////////////////////////////////////
//  accTog2(idParmIn) {
//   this.dfHelpMsg = ''; // blank out the initial df  help message
//   switch (idParmIn) {
//     case 'df':
//       if ( this.dfListOn ) {
//         this.dfListOn = false;
//         this.ccOn = true;
//         this.pgOn = true;
//         this.dpOn = false;
//         this.ccDivHead = 'Content';
//         this.pgDivHead = 'Product Grid';
//       } else {
//         this.dfListOn = true; }
//       break;
//     case 'sc':
//       if ( this.scListOn ) {
//         this.scListOn = false;
//       } else {
//         this.scListOn = true; }
//       break;
//     case 'sf':
//       if ( this.sfListOn ) {
//         this.sfListOn = false;
//       } else {
//         this.sfListOn = true; }
//       break;
//     case 'fd':
//       if ( this.fdListOn ) {
//         this.fdListOn = false;
//       } else {
//         this.fdListOn = true; }
//       break;
//     case 'fl':
//       if ( this.flListOn ) {
//         this.flListOn = false;
//       } else {
//         this.flListOn = true; }
//       break;
//     case 'fm':
//       if ( this.fmListOn ) {
//         this.fmListOn = false;
//       } else {
//         this.fmListOn = true; }
//       break;

//   }


// } // end of accTog2
// ////////////////////////////////////////////////////
// dfRefocus(dfiParmIn, upDnParmIn) {
//   // when he clicks on the dflist,
//   // show dp and fd on rightside.
//   // this func also provides arrow up and down on dfList.
//   this.ccOn = false;
//   this.pgOn = false;
//   this.dpOn = true;
//   this.ccDivHead = 'Format Detail';
//   this.pgDivHead = 'Layout & Preview';
//   let i: number = dfiParmIn;
//   let niceId = '';

//   if ( upDnParmIn === 'up' && dfiParmIn > 0 ) {
//      niceId = 'niceId' + (dfiParmIn - 1).toString() ;
//     document.activeElement.previousElementSibling
//     .setAttribute('id', niceId);
//     document.getElementById(niceId).focus();
//     i = i - 1 ;
//   }
//   if ( upDnParmIn === 'dn' && dfiParmIn < this.dcFormatArray1.length - 1) {
//     niceId = 'niceId' + (dfiParmIn + 1).toString() ;
//     document.activeElement.nextElementSibling
//     .setAttribute('id', niceId);
//     document.getElementById(niceId).focus();
//     i = i + 1 ;
//   }
//   this.selectedDF = this.dcFormatArray1[i];
//   this.fdCompose(this.selectedDF);
//   this.dpBuild(this.selectedDF);
//   return false;  // does this prevent normal-browswer-scrolling?
// } //  end df refocus
// /////////////////////////////////////////////////////////////////
// fdCompose(dfParmIn: DcFormatListItem) {
//   // -alert('running fdCompose');
//   // build a nice set-of-lines of format info from the current df and its fd's.
//   // compose up to nine lines (one line per row).  compose into fc.
//   // set formatDetailArray2 as a subset of fd0
//   this.formatDetailArray2 = this.formatDetailArray0
//     .filter(fd => fd.fdFormatKey === dfParmIn.dfFormatKey);
//     // -alert('compose fd2 is' + JSON.stringify(this.formatDetailArray2));
//   this.initFc0();
//   // this.formatComposeArray1 = this.formatComposeArray0 ;  //duzt work?
//   for (let i = 0; i < this.formatDetailArray2.length; i++) {  // fd loop
//     // for the current fd, append to one fc
//     this.selectedFD = this.formatDetailArray2[i];
//     let k = this.formatComposeArray0.findIndex(x => x.fcRow == this.selectedFD.fdRow);
//     this.fc = this.formatComposeArray0[k];
//     this.fdComposeMask(this.selectedFD);   // sets fcPart1  fcPart2  fcPart3
//   }
//   this.formatComposeArray0 = this.formatComposeArray0.filter(sss => sss.fcPart1 > ' ' );
// } // end fdCompose
// fdComposeMask(fdParmIn) {
//   // sets fcPart1 fcPart2
//   // -alert(this.selectedFD.fdMask);

//   if (fdParmIn.fdContentName == 'Literal') {
//     let x = fdParmIn.fdMask.replace('""', '');
//     this.fc.fcPart1 = this.fc.fcPart1 + x + ' ';
//     this.fc.fcPart2 = this.fc.fcPart2 + x + ' ';
//     this.fc.fcContentOrText = 't';
//   } else {
//     this.fc.fcPart1 = this.fc.fcPart1 + fdParmIn.fdContentName + ' ';
//     this.fc.fcPart2 = this.fc.fcPart2 + this.fdComposeMaskEx(fdParmIn) + ' ';
//     this.fc.fcContentOrText = 'c';
//   }
// } // end fdComposeMask
// fdComposeMaskEx(fdParmIn) {
//   let ex = '';
//   if (fdParmIn.fdContentName.toUpperCase().indexOf('SKU') >= 0) {
//     ex = 'NF5678';
//     if (this.suFreqArray0[0].sku) { // truthy.  a sku is in play.
//       ex = this.fdComposeMaskSmr(fdParmIn.fdContentName, this.suFreqArray0[0].sku);
//     }
//   }
//   if (fdParmIn.fdContentName.toUpperCase().indexOf('CUST. LOT') >= 0) {
//     ex = 'ABCDEF';
//   }
//   if (fdParmIn.fdContentName.toUpperCase().indexOf('LOT') >= 0
//     && fdParmIn.fdContentName.toUpperCase().indexOf('CUST. LOT') != 0) {
//     if (fdParmIn.fdMask.toUpperCase() == 'NNNNAMCX') {
//       ex = '8001ABCD';
//     }
//     if (fdParmIn.fdMask.toUpperCase() == 'NNNNAMC') { // first 7 of last8
//       ex = '8001ABC';
//     }
//     if (fdParmIn.fdMask.toUpperCase() == 'N/A') { // full 12 ?
//       ex = '2018001ABCD';
//     }
//     if (fdParmIn.fdMask.toUpperCase() == 'NAMC') { // 4-7 of last 8
//       ex = '1ABC';
//     }
//     if (fdParmIn.fdMask.toUpperCase() == 'NAMCX') { // 4-8 of last 8
//       ex = '1ABCD';
//     }
//     if (fdParmIn.fdMask.toUpperCase() == 'AMC') { // 4-8 of last 8
//       ex = 'ABC';
//     }
//   }
//   if (fdParmIn.fdContentName.toUpperCase().indexOf('DATE') >= 0) {
//     if (fdParmIn.fdContentName.toUpperCase().indexOf('EXP') >= 0) {
//       ex = this.fdComposeDate(fdParmIn.fdMask, this.exampleExpDate);
//     } else {
//       ex = this.fdComposeDate(fdParmIn.fdMask, this.exampleDate);
//     }
//   }
//   if (fdParmIn.fdContentName.toUpperCase().indexOf('QUANTITY') >= 0) {
//     ex = '24';
//     // pick an example that matches mask mmddyy mm.dd.yy etc
//   }
//   return ex;
// } // end fdComposeMaskEx
// fdComposeDate(maskParmIn, dateExampleParmIn) {
//  // call this func with two parms:
//  // maskParmIn (the mask that says how we want the date to be formatted)
//  // dateExample (a date in ccyymmdd format)
//  // return x to the caller -- a formatted date.
//  let e = dateExampleParmIn;
//  let m = maskParmIn.toUpperCase();
//  let x = '?'; //we will return x to the caller
//  let c1 = e.substring(0, 1);
//  let c2 = e.substring(1, 2);
//  let y1 = e.substring(2, 3);
//  let y2 = e.substring(3, 4);
//  let m1 = e.substring(4, 5);
//  let m2 = e.substring(5, 6);
//  let d1 = e.substring(6, 7);
//  let d2 = e.substring(7, 8);
//  if (m == 'YYYY.MM.DD') {
//   x = c1 + c2 + y1 + y2 + '.' + m1 + m2 + '.' + d1 + d2;
//  }
//   if (m == 'YY.MM.DD') {
//     x =  y1 + y2 + '.' + m1 + m2 + '.' + d1 + d2;
//   }
//   if (m == 'YYYY/MM/DD') {
//     x = c1 + c2 + y1 + y2 + '/' + m1 + m2 + '/' + d1 + d2;
//   }
//   if (m == 'YYYYMMDD') {
//     x = c1 + c2 + y1 + y2  + m1 + m2  + d1 + d2;
//   }
//   if (m == 'MMDDYY') {
//     x =  m1 + m2  + d1 + d2 + y1 + y2;
//   }
//   if (m == 'MM/DD/YYYY') {
//     x = m1 + m2 + '/' + d1 + d2 + '/' + c1 + c2 + y1 + y2;
//   }
//   if (m == 'MM/DD/YY') {
//     x = m1 + m2 + '/' + d1 + d2 + '/' + y1 + y2;
//   }
//   if (m == 'DD/MM/YYYY') {
//     x = d1 + d2 + '/' + m1 + m2  + '/' + c1 + c2 + y1 + y2;
//   }
//   if (m == 'MM/YY') {
//     x =  m1 + m2  + '/' + y1 + y2;
//   }
//   if (m == 'MM/YYYY') {
//     x = m1 + m2  + '/' + c1 + c2 + y1 + y2;
//   }
//   if (m == 'DD/MM/YY') {
//     x = d1 + d2  + '/' + m1 + m2 + '/' + y1 + y2;
//   }
//   if (m == 'DD/MM/YYYY') {
//     x = d1 + d2  + '/' + m1 + m2 + '/' + c1 + c2 + y1 + y2;
//   }
//   if (m == 'DDMMYYYY') {
//     x = d1 + d2   + m1 + m2  + c1 + c2 + y1 + y2;
//   }
//   if (m == 'DDMMMYY') {
//     x = d1 + d2 + 'JUL' + y1 + y2;
//   }
//   if (m == 'MMM.YY') {
//     x = 'JUL' + y1 + y2;
//   }
//   if (m == 'MM YY') {
//     x = m1 + m2 + ' ' + y1 + y2 ;
//   }
//   if (m == 'NM YY') {
//     if (m1 == '0') {
//       x =  m2 + ' ' + y1 + y2 ;
//     }
//     if (m1 != '0') {
//       x = m1 + m2 + ' ' + y1 + y2 ;
//     }
//   }
//   if (m == 'MM YYYY') {
//     x = m1 + m2 + ' ' + c1 + c2 + y1 + y2 ;
//   }
//   if (m == 'YY AMM') {
//     x = y1 + y2 + ' Jl';
//   }
//   if (m == 'DDMMYY') {
//     x = d1 + d2  + m1 + m2 + y1 + y2 ;
//   }
//   if (m == 'YYMMDD') {
//     x = y1 + y2  + m1 + m2 + d1 + d2 ;
//   }
//   if (m == 'YY/MM/DD') {
//     x = y1 + y2 + '/' + m1 + m2 + '/' + d1 + d2 ;
//   }
//   if (m == 'YYYY/MM') {
//     x = c1 + c2 + y1 + y2 + '/' + m1 + m2 ;
//   }
//   if (m == 'DDMM YYYY') {
//     x = d1 + d2 + m1 + m2 + ' ' + c1 + c2 + y1 + y2;
//   }

//  return x;
// } // end fdComposeDate
// fdComposeMaskSmr(ccNameParmIn, skuParmIn) {
//   // smr is Sku Minus Revision
//   // strip the sku suffix from the right side of the sku
//   // return the left side to the caller
//   // note that we want to include left side alpha's,
//   // and we want to exclude right side alpha's
//   // and we want to exclude any numbers on the right of a 
//   // rightside alpha. geez,  lotta work for something so simple.
//   // 
//   // return the full sku if cc aint no SKU-MINUS-REV thing:
//   if (ccNameParmIn.toUpperCase().indexOf('MINUS REV') < 0) { return skuParmIn ; }
//   // we are working with a SKU-MINUS-REV
//   let thisCharAlphaOrNumeric = '?';
//   let endOfLeft = false;
//   let smr = '';
//   for (let i = 0; i < skuParmIn.length; i++) {
//     let x = skuParmIn.substring(i, i + 1 );
//     if ( '0123456789'.indexOf(x) >= 0  ) {thisCharAlphaOrNumeric = 'n'; }
//     if ( '0123456789'.indexOf(x)  < 0  ) {thisCharAlphaOrNumeric = 'a'; }
//     if ( thisCharAlphaOrNumeric == 'a' &&  i > 2 ) { endOfLeft = true;  }
//     if (!endOfLeft) { smr = smr + x }
//   }
//   return smr;
// } // end fdComposeMaskSmr
// /////////////////////////////////////////////////////////////////
// dpBuild(dfParmIn: DcFormatListItem) {
//   this.myModal1Msg2 = 'Preview lot: 2018001ABCD   Preview date: 2018/07/31';
//   this.myModal1Msg1 = 'Format: ' + this.selectedDF.dfFormatKey + ' ';
//   this.myModal1Msg1 = this.myModal1Msg1 + this.selectedDF.dfFormatName;
//   this.dp1a = 'Format: ';
//   this.dp1b = this.selectedDF.dfFormatKey;
//   this.dp1c = 'Description: ';
//   this.dp1d = this.selectedDF.dfFormatName;
//   // this.dpHeadRight = 'Preview lot: 2018001ABCD   Preview date: 2018/07/31';
//   this.dp2a = 'Preview using';
//   this.dp2b = ' 2018001ABCD ';
//   this.dp2c = ' July 31, 2019';
//   this.dp2d = '';
// } // end dpBuild
// /////////////////////////////////////////////////////////////////
// initFc0() { // used for housing df & fd values shown in format detail
//   this.formatComposeArray0 = [
//     { id: 1, fcRow: 1, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 2, fcRow: 2, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 3, fcRow: 3, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 4, fcRow: 4, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 5, fcRow: 5, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 6, fcRow: 6, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 7, fcRow: 7, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 8, fcRow: 8, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' },
//     { id: 9, fcRow: 9, fcFormatKey: '', fcPart1: '', fcPart2: '', fcPart3: '', fcContentOrText: 'c' }
//   ];
// }  // end initFc0
// /////////////////////////////////////////////////////////////////

// }
