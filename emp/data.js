db.emp.find(
    {
        salary:{$not:30000}
    },
      
    {}
  ).pretty();
