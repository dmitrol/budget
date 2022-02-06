export default {
  state: {
    bills: []
  },
  getters: {
    getAllBills(state) {
      return state.bills;
    },
    getBillById(state) {
      return (id) => {
        const arr = state.bills.filter(item => item.id === id);
        return arr[0];
      }
    }
  },
  mutations: {
    updateBills(state, bills) {
      state.bills = bills;
    }
  },
  actions: {
    async getBills(ctx) {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/bills`);
      if (!res.ok) {

      }
      const bills =  await res.json();
      ctx.commit('updateBills', bills);
    },
    async getBillById(ctx, id) {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/bills/${id}`);
      if (!res.ok) {

      }
      return await res.json();
    },
    async addBill(ctx, bill) {
      const data = JSON.stringify(bill);
      const res = await fetch(`${process.env.VUE_APP_API_URL}/bills`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: data
      });
      await ctx.dispatch('getBills');

    },
    // async putBillById(ctx, data) {
    //   console.log(data);
    //   const res = await fetch(`${process.env.VUE_APP_API_URL}/bills/${data.id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: data.bill
    //   });
    //   await ctx.dispatch('getBills');
    // },
    async removeBillById({dispatch, getters}, id) {
      const bills = getters.getAllBills;
      const selected = bills.filter((item) => {
        return item.id === id;
      });
      await dispatch('removeRecordsByBill', selected[0].name);
      const res = await fetch(`${process.env.VUE_APP_API_URL}/bills/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      });
      await dispatch('getBills');
    },
    removeBillsByCurrency: {
      async handler({getters, dispatch}, currencyName) {
        const bills = await getters.getAllBills;
        const newArr = bills.filter((item) => {
          return item.currency === currencyName;
        });
        newArr.forEach(async (elem) => {
          await dispatch('removeBillById', elem.id)
        });
      },
      root: true
    },
    async putBillById(ctx, data) {
      if(!data.bill) return
      const jsonData = JSON.stringify(data.bill)
      const res = await fetch(`${process.env.VUE_APP_API_URL}/bills/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: jsonData
      });
      await ctx.dispatch('getBills');
    }
  },
}