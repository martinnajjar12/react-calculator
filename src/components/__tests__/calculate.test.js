import calculate from '../../logic/calculate';

describe('Entering a number', () => {
  it('should return an object where total is btnName, next is null and operation is null when operation is null', () => {
    const data = { total: null, next: null, operation: null };
    expect(calculate(data, '1')).toEqual({ total: '1', next: null, operation: null });
  });

  it('should set next to the btnName when operation is not null', () => {
    const data = { total: '4', next: null, operation: '+' };
    expect(calculate(data, '3')).toEqual({ total: '4', next: '3', operation: '+' });
  });
});

describe('AC key', () => {
  it('should set all the keys to null', () => {
    const data = { tota: '3', next: '5', operation: '+' };
    expect(calculate(data, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
});

describe('+/- key', () => {
  it("should set the next value negative if it's positive", () => {
    const data = { total: '3', next: '5', operation: '+' };
    expect(calculate(data, '+/-')).toEqual({ total: '3', next: '-5', operation: '+' });
  });

  it("should set the total value negative if it's positive and if next value is null", () => {
    const data = { total: '3', next: null, operation: null };
    expect(calculate(data, '+/-')).toEqual({ total: '-3', next: null, operation: null });
  });
});

describe('% key', () => {
  it('should divide the next value by 100 if next value exists', () => {
    const data = { total: '3', next: '5', operation: '+' };
    expect(calculate(data, '%')).toEqual({ total: '3', next: '0.05', operation: '%' });
  });

  it("should divide the total value by 100 if next value doesn't exist", () => {
    const data = { total: '3', next: null, operation: null };
    expect(calculate(data, '%')).toEqual({ total: '0.03', next: null, operation: '%' });
  });
});

describe('= key', () => {
  it('should return the proper value for total and null for next and operation', () => {
    const data = { total: '3', next: '4', operation: '+' };
    expect(calculate(data, '=')).toEqual({ total: '7', next: null, operation: null });
  });
});

describe('. key', () => {
  it('should return the same object if next exists and already contains .', () => {
    const data = { total: '3', next: '4.', operation: '+' };
    expect(calculate(data, '.')).toEqual({ total: '3', next: '4.', operation: '+' });
  });

  it("should add a . to the next value if next exists and doesn't contain .", () => {
    const data = { total: '3', next: '4', operation: '+' };
    expect(calculate(data, '.')).toEqual({ total: '3', next: '4.', operation: '+' });
  });

  it("should set the value of next to '0.' when operation exists", () => {
    const data = { total: null, next: null, operation: '+' };
    expect(calculate(data, '.')).toEqual({ total: null, next: '0.', operation: '+' });
  });

  it('should return the same object if total already contains .', () => {
    const data = { total: '0.', next: null, operation: null };
    expect(calculate(data, '.')).toEqual({ total: '0.', next: null, operation: null });
  });

  it('should add a . besides the total value if next and operation are null', () => {
    const data = { total: '5', next: null, operation: null };
    expect(calculate(data, '.')).toEqual({ total: '5.', next: null, operation: null });
  });

  it('sets the total value to 0. when total, next and operation are null', () => {
    const data = { total: null, next: null, operation: null };
    expect(calculate(data, '.')).toEqual({ total: '0.', next: null, operation: null });
  });
});

describe("'+' keys", () => {
  it('should add the next value to the total value and set next to null and operation to btnName when none of them is null', () => {
    const data = { total: '4', next: '3', operation: '+' };
    expect(calculate(data, '+')).toEqual({ total: '7', next: null, operation: '+' });
  });

  it("should set the operation to '+' when next is null", () => {
    const data = { total: '7', next: null, operation: null };
    expect(calculate(data, '+')).toEqual({ total: '7', next: null, operation: '+' });
  });
});

describe("'-' key", () => {
  it('should substract the total value from the next value and set next to null and operation to btnName when none of them is null', () => {
    const data = { total: '4', next: '3', operation: '−' };
    expect(calculate(data, '−')).toEqual({ total: '1', next: null, operation: '−' });
  });

  it("should set the operation to '-' when next is null", () => {
    const data = { total: '7', next: null, operation: null };
    expect(calculate(data, '−')).toEqual({ total: '7', next: null, operation: '−' });
  });
});

describe("'×' key", () => {
  it('should multiply the total value and the next value and set next to null and operation to btnName when none of them is null', () => {
    const data = { total: '4', next: '3', operation: '×' };
    expect(calculate(data, '×')).toEqual({ total: '12', next: null, operation: '×' });
  });

  it("should set the operation to '×' when next is null", () => {
    const data = { total: '7', next: null, operation: null };
    expect(calculate(data, '×')).toEqual({ total: '7', next: null, operation: '×' });
  });
});

describe("'÷' key", () => {
  it('should divide the total value by the next value and set next to null and operation to btnName when none of them is null', () => {
    const data = { total: '12', next: '3', operation: '÷' };
    expect(calculate(data, '÷')).toEqual({ total: '4', next: null, operation: '÷' });
  });

  it("should set the operation to '÷' when next is null", () => {
    const data = { total: '7', next: null, operation: null };
    expect(calculate(data, '÷')).toEqual({ total: '7', next: null, operation: '÷' });
  });
});
