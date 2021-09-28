export default {
  state: {
    bills: []
  },
  getters: {
    getAllBills(state) {
      return state.bills;
    }
  },
  mutations: {
    updateBills(state, bills) {
      state.bills = bills;
    }
  },
  actions: {
    async getBills(ctx) {
      const res = await fetch('http://localhost:3000/bills');
      if (!res.ok) {

      }
      const bills =  await res.json();
      ctx.commit('updateBills', bills);
    },
    // async getBillById(ctx, id) {
    //   const res = await fetch(`http://localhost:3000/bills/${id}`);
    //   if (!res.ok) {

    //   }
    //   return await res.json();
    // },
    async addBill(ctx, bill) {
      const data = JSON.stringify(bill);
      const res = await fetch('http://localhost:3000/bills', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: data
      });
      await ctx.dispatch('getBills');
    },
    async putBillById(ctx, data) {
      const res = await fetch(`http://localhost:3000/bills/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: data.bill
      });
      await ctx.dispatch('getBills');
    },
    async removeBillById(ctx, id) {
      const res = await fetch(`http://localhost:3000/bills/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      });
      await ctx.dispatch('getBills');
    }
  },
}