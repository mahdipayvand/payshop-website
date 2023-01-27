import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const loginReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const loginRes = await loginReq.json();

    if (loginReq.status === 400) return rejectWithValue("ایمیل یا رمز عبور رو وارد نکردی");
    if (loginReq.status === 404) return rejectWithValue("کاربری با این ایمیل وجود نداره");
    if (loginReq.status === 401) return rejectWithValue("رمز عبور رو درست وارد نکردی");

    return loginRes.data.token;
  } catch (_) {
    return rejectWithValue("مشکلی پیش اومد");
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const registerReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (registerReq.status === 400) return rejectWithValue("نام، نام خانوادگی، ایمیل یا رمز عبور رو وارد نکردی");
      if (registerReq.status === 409) return rejectWithValue("کاربری با این ایمیل وجود داره");

      return "ثبت نام با موفیت انجام شد";
    } catch (_) {
      return rejectWithValue("مشکلی پیش اومد");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.token = null;

      toast.error(`${action.payload}!`);
    });
    builder.addCase(register.fulfilled, (_, action) => {
      toast.success(`${action.payload}!`);
    });
    builder.addCase(register.rejected, (_, action) => {
      toast.error(`${action.payload}!`);
    });
  },
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
