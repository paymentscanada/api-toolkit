import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export class DateUtils {
  static convertNgbDateToString(date: NgbDate): string {
    if (date) {
      return moment().year(date.year).month(date.month - 1).date(date.day).format('YYYY-MM-DD');
    } else {
      return null;
    }
  }
}
