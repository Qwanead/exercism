
class Node<T> {
  value;
  prev;
  next;

  constructor(value: T, prev: NodeNullable<T> = null, next: NodeNullable<T> = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
type NodeNullable<T> = Node<T> | null;

export class LinkedList<TElement> {
  private _first: NodeNullable<TElement>;
  private _last: NodeNullable<TElement>;

  constructor() {
    this._first = null;
    this._last = null;
  }

  public push(element: TElement): void {
    const node = new Node(element);
    if (this._last === null) {
      this._first = node;
      this._last = node;
    } else {
      node.prev = this._last;
      this._last.next = node;
      this._last = node;
    }
  }

  public pop(): TElement | null {
    if (this._last === null) {
      return null;
    }

    const result = this._last.value;
    this._last = this._last.prev;
    if (this._last !== null) {
      this._last.next = null;
    } else {
      this._first = null;
    }

    return result;
  }

  public shift(): TElement | null {
    if (this._first === null) {
      return null;
    }

    const result = this._first.value;
    this._first = this._first.next;
    if (this._first !== null) {
      this._first.prev = null;
    } else {
      this._last = null;
    }

    return result;
  }

  public unshift(element: TElement): void {
    const node = new Node(element);

    if (this._first === null) {
      this._first = node;
      this._last = node;
    } else {
      node.next = this._first;
      this._first.prev = node;
      this._first = node;
    }
  }

  public delete(element: TElement): void {
    if (this._first === null) {
      return;
    }
    let head: NodeNullable<TElement> = this._first;
    while (head && head.value !== element) {
      head = head.next;
    }
    if (head !== null) {
      if (head.prev !== null) {
        head.prev.next = head.next;
      } else {
        this._first = null;
      }
      if (head.next !== null) {
        head.next.prev = head.prev;
      } else {
        this._last = null;
      }
      head = null;
    }
  }

  public count(): number {
    if (this._first === null) {
      return 0;
    }
    
    let result = 1;
    let head = this._first;
    while (head.next !== null) {
      head = head.next;
      result += 1;
    }

    return result;
  }
}
