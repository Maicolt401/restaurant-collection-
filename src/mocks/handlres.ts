import { rest } from "msw";

export const mockClientRegister = {
  restaurantName: "la villota",
  username: "villota",
  CIF: "as56541",
  password: "2123456",
};

const mockToken = "token";

export const handlres = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/clients/login`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ token: mockToken }));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}/clients/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          mockClientRegister,
        })
      );
    }
  ),
];

export const mockLoginUser = {
  username: "villasants6",
  password: "123456",
};
