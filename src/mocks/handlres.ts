import { rest } from "msw";

export const mockClientRegister = {
  restaurantName: "la villota",
  username: "villota",
  CIF: "as56541",
  password: "2123456",
};

export const handlres = [
  rest.post(
    `${process.env.REACT_APP_API_URL}clients/register`,
    (req, res, ctx) => { return res(
        ctx.status(201),
        ctx.json({
          mockClientRegister,
        })
      );
    }
  ),
];
