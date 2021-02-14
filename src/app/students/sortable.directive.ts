import {
  Directive,
  HostBinding,
  HostListener,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

// tslint:disable-next-line:directive-selector
@Directive({ selector: 'span[sortable]' })
export class NgbdSortableHeaderDirective {
  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  @HostBinding('class.asc') get asc(): boolean {
    return this.direction === 'asc';
  }
  @HostBinding('class.desc') get desc(): boolean {
    return this.direction === 'desc';
  }

  @HostListener('click') rotate(): void {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}
