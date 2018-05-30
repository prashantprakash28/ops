import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(xyz: string) {
    this.toDoList.push({
      title : {title: xyz, Date:"",Time:"",isChecked: false , comment:""},
       
      isChecked: false,
      booking: ["Check whether all bookings are done", "Date", "Time",  false],
      voucherReceived: ["Are all vouchers received", "", "", false],
      voucherShared: ["Are all voucher shared with guest", "", "", false],
      clientTicket: ["If flight, bus or train tickets is booked by client then are those shared with us", "", "", false],
      whatsappCreated: ["Is whatsApp group created", "", "", false],
      w_appVoucherShared: ["Are all vouchers shared on whatsApp", "", "", false],
      tipsShare: ["Share all vouchers on whatsApp Group", "", "", false],
      driverDetails: ["Is drivers details shared", "", "", false],
      coordinatorDetail: ["Share Tour Co-ordinator Details", "", "", false],
      emergencyContact: ["Share emergency contact", "", "", false],
      pickupDetails: ["Pick up status", "", "", false]  
    });
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.set($key, {isChecked: flag});
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }

}
