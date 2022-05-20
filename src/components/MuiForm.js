import React, { useCallback } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import _debounce from "lodash/debounce";
import { joiResolver } from "@hookform/resolvers/joi";

// validations
import { schema } from "./../validations/MuiFormValidation";

const MuiForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const onSubmit = async (data) => {
    // const addExtra = { ...data, extra: "noman", age: 30 };
    // console.log(addExtra);
    console.log(data);
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data,
      {
        headers: {
          OK: "every thing is ok",
        },
      }
    );
    console.log(res);
  };
  const debounceFun = useCallback(_debounce(onSubmit, 1000), []);

  return (
    <form onSubmit={handleSubmit(debounceFun)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 2,
          width: "50%",
          mx: "auto",
          mt: 4,
        }}
      >
        <TextField placeholder="name" type={"text"} {...register("name")} />
        <TextField placeholder="email" type="email" {...register("email")} />
        {errors.email && (
          <Typography sx={{ color: "red" }}>This field is required</Typography>
        )}
        <TextField
          placeholder="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <Typography sx={{ color: "red" }}>This field is required</Typography>
        )}
        {/* {...register("extra")} */}
        <Button type="submit" variant="contained">
          submit
        </Button>
      </Box>
    </form>
  );
};

export default MuiForm;
