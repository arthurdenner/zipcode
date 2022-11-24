import { rest } from "msw";

export const handlers = [
  rest.get(/57015040/, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        cep: "57015-040",
      })
    );
  }),
];
