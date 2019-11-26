/*

% This code is a rough draft to improve Camon's billing system
POS=input('Input the POS data from today: ');           (n x 4)
Bar=input('Input the Bar data from today: ');           (n x 4 )
amTips=input('Input the a.m. Tips from today: ');       (scalar)
totalCredit=sum(POS(:,1))+sum(Bar(:,1));                ()
totalCash=sum(POS(:,2))+sum(Bar(:,2));
totalCreditTips=sum(POS(:,3))+sum(Bar(:,3))
% totalCashTips=sum(POS(:,4))+sum(Bar(:,4));
totalCash1=totalCash-amTips
Total=totalCredit+totalCash
CashforCamon=totalCash1+amTips-totalCreditTips
*/

function column(matrix, index) {
  // index is 0-indexed
  var arr = []
  matrix.forEach(e => {
    arr.push(e[index])
  });
  return arr
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

function calculate(POS, bar, amTips) {
  var totalCredit = sum(column(POS, 0)) + sum(column(bar, 0));
  var totalCash = sum(column(POS, 1)) + sum(column(bar, 1));
  var totalCreditTips = sum(column(POS, 2)) + sum(column(bar, 2));
  var totalCashTips = sum(column(POS, 3)) + sum(column(bar, 3));

  var totalCash1 = totalCash - amTips;
  var Total = totalCredit + totalCash;
  var CashforCamon = totalCash1 + amTips - totalCreditTips;

  console.log("totalCash1: " + totalCash1);
  console.log("Total: " + Total);
  console.log("CashforCamon: " + CashforCamon);

  return [totalCash1, Total, CashforCamon]
}