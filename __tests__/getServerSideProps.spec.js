import { getServerSideProps } from "../src/pages/[zipcodeParam]";

describe("getServerSideProps", () => {
  it("TODO: Label it", async () => {
    const result = await getServerSideProps({
      params: { zipcodeParam: "57015040" },
    });
    expect(result.props.data.cep).toBe("57015-040");
  });
});
