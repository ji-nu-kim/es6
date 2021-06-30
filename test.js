import { items, map, filter, reduce, go, pipe, add, curry } from './utils.js';

const sum = curry((f, iter) => go(iter, map(f), reduce(add)));
const total_quantity = sum((i) => i.quantity);
const total_price = sum((i) => i.quantity * i.price);

document.querySelector('#cart').innerHTML = `
  <table>
    <tr>
      <th></th>
      <th>이름</th>
      <th>가격</th>
      <th>수량</th>
      <th>총 가격</th>
    </tr>
    ${go(
      items,
      sum(
        (i) => `
      <tr>
        <td><input type="checkbox" ${i.isSelected ? 'checked' : ''}/></td>
        <td>${i.name}</td>
        <td>${i.price}</td>
        <td><input type="number" value="${i.quantity}"/></td>
        <td>${i.price * i.quantity}</td>
      </tr>
    `,
      ),
    )}
    <tr>
      <td colspan="3">합계</td>
      <td>${total_quantity(filter((i) => i.isSelected, items))}</td>
      <td>${total_price(filter((i) => i.isSelected, items))}</td>
    </tr>
  </table>
`;
