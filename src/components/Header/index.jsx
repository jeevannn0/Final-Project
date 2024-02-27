import React from "react";
import { Text, Heading, Img, Button, CheckBox, Slider, RatingBar } from "./..";

export default function Header({ ...props }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div {...props}>
      <div className="h-60 w-[59%] relative">
        <Img
          src="images/img_img.png"
          alt="img_one"
          className="justify-center h-60 w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
        />
        <div className="flex flex-row justify-between w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
          <Img src="images/img_i_eicon_chevron_left.svg" alt="ieiconchevron" className="h-[26px]" />
          <Img src="images/img_button_next_slide.svg" alt="buttonnext_one" className="h-[26px]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[63px] max-w-[1100px]">
        <div className="flex flex-col items-center justify-start w-[97%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-4/5">
                    <div className="flex flex-row justify-start items-center w-full gap-px">
                      <div className="flex flex-col items-start justify-start w-1/2">
                        <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                          <div className="flex flex-row justify-start">
                            <Heading size="md" as="h1" className="!leading-[38px]">
                              Custom-Built PCs,
                              <br />
                              For Your Convenience.
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-start">
                            <Text as="p" className="w-[98%]">
                              Personal computers should transcend machines, they must be
                              <br />
                              tailored experiences designed for you.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start mt-[31px] gap-4">
                          <Button
                            color="light_blue_500"
                            variant="fill"
                            shape="round"
                            className="font-bold border-white-A700_33 border border-solid min-w-[103px]"
                          >
                            Shop Now
                          </Button>
                          <Button shape="round" className="font-bold min-w-[177px]">
                            Customize Your Own
                          </Button>
                        </div>
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={24}
                          className="flex justify-between w-[184px] mt-8"
                        />
                        <div className="flex flex-row justify-start w-[44%] mt-[19px]">
                          <div className="flex flex-row justify-start w-full">
                            <a href="https://idealtech.com.my/#main-cust-review" target="_blank" rel="noreferrer">
                              <Text as="p" className="underline">
                                Over 4,800+ 5 Star Reviews
                              </Text>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[424px] w-[424px]">
                        <Img
                          src="images/img_01_artwork_pc_png.png"
                          alt="01artworkpc_one"
                          className="w-[424px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[63px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-4/5">
                    <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                      <div className="flex flex-row justify-center w-full">
                        <Heading size="s" as="h2" className="ml-[359px] mr-[360px] !text-gray-500 text-center">
                          Trusted by
                        </Heading>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-4">
                        <div className="justify-center w-full gap-2 grid-cols-4 grid min-h-[auto]">
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_35_png.png"
                              alt="alllogo35png"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_44_png.png"
                              alt="alllogo44png"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_40_png.png"
                              alt="alllogo40png"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_81_png.png"
                              alt="alllogo81png"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_46_png.png"
                              alt="alllogo46png"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_37_png.png"
                              alt="alllogo37png"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_47_png.png"
                              alt="alllogo47png"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                          <div className="flex flex-row justify-center w-full border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <Img
                              src="images/img_all_logo_73_webp.png"
                              alt="alllogoseventyt"
                              className="w-[100px] mx-[50px] object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full pt-4">
                          <div className="flex flex-row justify-center w-full p-[3px]">
                            <a href="#" className="mt-[3px] mx-[388px]">
                              <Text as="p" className="!text-gray-500 text-center underline">
                                See More
                              </Text>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[63px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-4/5">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-center justify-start w-[62%] pb-1 gap-1">
                        <div className="flex flex-row justify-center w-full pt-0.5 px-0.5">
                          <Heading size="md" as="h3" className="mx-[139px] text-center">
                            Best Selling PC
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-row justify-center w-full">
                            <Text as="p" className="w-[90%] text-center">
                              Discover the popular choices selected by our customers. Ranging from
                              <br />
                              Workstation PC, Gaming PC and Desktop PC.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-4/5 mt-[31px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 4 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-full"
                    items={[...Array(12)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex flex-col items-center justify-start mx-2.5">
                          <div className="flex flex-col items-center justify-start w-[91%] pb-[7px]">
                            <div className="flex flex-col items-center justify-start w-full gap-2">
                              <div className="flex flex-col items-center justify-start h-[197px] w-[197px]">
                                <div className="flex flex-col items-center justify-start h-[197px] w-[197px]">
                                  <Img
                                    src="images/img_2402_3699_turbo.png"
                                    alt="24023699turbo"
                                    className="w-[197px] object-cover rounded-[10px]"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row justify-evenly w-full">
                                <div className="flex flex-row justify-center w-[44%]">
                                  <Heading as="h4" className="mt-0.5 !text-gray-600 text-center line-through">
                                    RM3,802.00
                                  </Heading>
                                </div>
                                <div className="flex flex-row justify-center w-[44%]">
                                  <Heading as="h5" className="mt-0.5 !text-red-A700 text-center">
                                    RM3,699.00
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                  <div className="flex flex-row justify-center w-full pt-2.5 gap-[22px] px-2.5">
                    <Button size="md" variant="fill" className="w-[50px] ml-[352px]">
                      <Img src="images/img_arrow_left.svg" />
                    </Button>
                    <Button size="md" variant="fill" className="w-[50px] mr-[352px]">
                      <Img src="images/img_arrow_right.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-16">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-4/5">
                    <div className="flex flex-col items-center justify-start w-full gap-8">
                      <div className="flex flex-col items-center justify-start w-[62%]">
                        <div className="flex flex-row justify-center w-full pt-0.5 px-0.5">
                          <Heading size="md" as="h2" className="mx-[60px] text-center">
                            We Build with Experience
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-center w-full py-1">
                          <div className="flex flex-row justify-center w-full">
                            <Text as="p" className="w-[96%] text-center">
                              Over a decade of experience crafting personalised desktop, gaming pcs for
                              <br />
                              gamers, students and professionals to ensure your convenience.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row w-[64%] gap-4">
                        <div className="flex flex-col items-center justify-center w-[32%] gap-1.5 border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                          <div className="flex flex-row justify-center w-[99%] mt-[15px]">
                            <Heading size="s" as="h4" className="!text-light_blue-500 text-center">
                              2007
                            </Heading>
                          </div>
                          <Text as="p" className="mb-5 text-center">
                            Beginnings
                          </Text>
                        </div>
                        <div className="flex flex-row justify-center w-[32%]">
                          <div className="flex flex-col items-center justify-start w-full gap-1 border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <div className="flex flex-row justify-center w-[99%] mt-[15px]">
                              <Heading size="s" as="h4" className="mx-[33px] !text-light_blue-500 text-center">
                                72,700+
                              </Heading>
                            </div>
                            <Text as="p" className="mb-[21px] text-center">
                              PCs Built
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-[32%]">
                          <div className="flex flex-col items-center justify-start w-full gap-[5px] border-white-A700_19 border border-solid bg-gray-900 rounded-lg">
                            <div className="flex flex-row justify-center w-[99%] mt-[15px]">
                              <Heading size="s" as="h4" className="!text-light_blue-500 text-center">
                                14
                              </Heading>
                            </div>
                            <Text as="p" className="mb-[21px] text-center">
                              States Covered
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[62px]">
                <div className="flex flex-row justify-center w-4/5 border-white-A700 border border-solid rounded-[16px]">
                  <div className="flex flex-col items-center justify-start w-[48%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="justify-center w-full grid-cols-2 grid min-h-[auto]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            src="images/img_01_branch_ampanghq_png.png"
                            alt="01branch_one"
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            src="images/img_02_branch_ss2_png.png"
                            alt="02branchsstwo"
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            src="images/img_03_branch_setiaalam_png.png"
                            alt="03branch_one"
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            src="images/img_04_branch_johor_png.png"
                            alt="04branchjohor"
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-[53%] p-10">
                    <div className="flex flex-row justify-start mt-[88px]">
                      <Heading size="md" as="h2" className="w-[88%] !leading-[38px]">
                        Built by Enthusiasts,
                        <br />
                        for Enthusiasts
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full mt-2 py-1">
                      <div className="flex flex-row justify-start w-full">
                        <Text as="p" className="w-[98%]">
                          Has been our goal. Expansion, Coverage and Reach is
                          <br />a new goal to aim for a better convenience for our
                          <br />
                          customers.
                        </Text>
                      </div>
                    </div>
                    <Button shape="round" className="mt-10 mb-[88px] font-bold min-w-[103px]">
                      Visit Shop
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[62px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-4/5">
                    <div className="flex flex-col items-center justify-start w-full gap-8">
                      <div className="flex flex-col items-center justify-start w-[62%] gap-px">
                        <div className="flex flex-row justify-center w-full">
                          <Heading size="md" as="h2" className="mx-[135px] text-center">
                            We Care for You
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-center w-full py-1">
                          <div className="flex flex-row justify-center w-full">
                            <Text as="p" className="mx-2.5 text-center">
                              By securing lifetime of Free After Sale Services ready on-call to ensure your
                              <br />
                              convenience is steady from the start.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start w-[59%] pt-4 px-4">
                        <div className="flex flex-col items-center justify-start w-[97%] gap-[15px]">
                          <div className="flex flex-col w-full gap-[23px]">
                            <div className="flex flex-row justify-between w-[97%] ml-[15px]">
                              <div className="flex flex-col items-center justify-start w-[19%] gap-4">
                                <Img src="images/img_icons_01_png.png" alt="image" className="w-16 object-cover" />
                                <div className="flex flex-row justify-center w-full py-1">
                                  <div className="flex flex-row justify-center w-full">
                                    <Text as="p" className="w-[92%] mx-[3px] text-center">
                                      Lifetime
                                      <br />
                                      Free Labor
                                      <br />
                                      Charges
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[19%] gap-4">
                                <Img src="images/img_icons_02_png.png" alt="image_one" className="w-16 object-cover" />
                                <div className="flex flex-row justify-center w-full py-1">
                                  <div className="flex flex-row justify-center w-full">
                                    <Text as="p" className="w-[97%] mx-px text-center">
                                      90 days
                                      <br />
                                      One to One
                                      <br />
                                      Exchange
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[19%] gap-4">
                                <Img src="images/img_icons_03_png.png" alt="image_two" className="w-16 object-cover" />
                                <div className="flex flex-row justify-center w-full py-1">
                                  <div className="flex flex-row justify-center w-full">
                                    <Text as="p" className="text-center">
                                      Free On-
                                      <br />
                                      Site Service
                                      <br />
                                      within KL
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[19%] gap-4">
                                <Img
                                  src="images/img_icons_04_png.png"
                                  alt="image_three"
                                  className="w-16 object-cover"
                                />
                                <div className="flex flex-row justify-center w-full py-1">
                                  <div className="flex flex-row justify-center w-full">
                                    <Text as="p" className="w-[82%] mx-[7px] text-center">
                                      Full Years
                                      <br />
                                      Warranty
                                      <br />
                                      Covered
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center items-center w-full">
                              <div className="flex flex-col items-center justify-start w-1/4 gap-4 p-[15px]">
                                <Img
                                  src="images/img_icons_05_png.png"
                                  alt="icons05png_one"
                                  className="w-16 object-cover"
                                />
                                <div className="flex flex-row justify-center w-[98%] py-1">
                                  <div className="flex flex-row justify-center w-full">
                                    <Text as="p" className="h-[60px] w-[60px] mx-[9px] text-center">
                                      Free
                                      <br />
                                      Warranty
                                      <br />
                                      Pick-up
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-1/5 ml-6 gap-4">
                                <Img
                                  src="images/img_icons_06_png.png"
                                  alt="icons06png_one"
                                  className="w-16 ml-[7px] object-cover"
                                />
                                <div className="flex flex-row justify-start w-full py-1">
                                  <div className="flex flex-row justify-start w-full">
                                    <Text as="p" className="text-center">
                                      Professional
                                      <br />
                                      Performance
                                      <br />
                                      Test
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-1/5 ml-[33px] gap-4">
                                <Img
                                  src="images/img_icons_07_png.png"
                                  alt="icons07png_one"
                                  className="w-16 ml-[7px] object-cover"
                                />
                                <div className="flex flex-row justify-start w-full py-1">
                                  <div className="flex flex-row justify-start w-full">
                                    <Text as="p" className="text-center">
                                      Profesional
                                      <br />
                                      Cable
                                      <br />
                                      Management
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[18%] ml-[31px] gap-4">
                                <Img
                                  src="images/img_icons_08_png.png"
                                  alt="icons08png_one"
                                  className="w-16 object-cover"
                                />
                                <div className="flex flex-row justify-center w-full py-1">
                                  <div className="flex flex-row justify-center w-full">
                                    <Text as="p" className="w-4/5 text-center">
                                      Lifetime
                                      <br />
                                      Technical
                                      <br />
                                      Support
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-[15%] pt-4">
                            <div className="flex flex-row justify-center w-full py-[3px]">
                              <a href="#" className="mt-[3px]">
                                <Text as="p" className="!text-gray-500 text-center underline">
                                  See More
                                </Text>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[62px]">
                <div className="flex flex-row justify-center w-4/5 border-white-A700 border border-solid rounded-[16px]">
                  <div className="flex flex-col items-start justify-center w-[53%] p-10">
                    <div className="flex flex-row justify-start mt-[88px]">
                      <Heading size="md" as="h2" className="w-[64%] !leading-[38px]">
                        Our Long Time
                        <br />
                        Partner
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full mt-2 py-1">
                      <div className="flex flex-row justify-start w-full">
                        <Text as="p" className="w-[92%]">
                          NVIDIA, one of our partner, has provided the best
                          <br />
                          support that made it possible for us to provide the
                          <br />
                          convenience our customer needs.
                        </Text>
                      </div>
                    </div>
                    <Button shape="round" className="mt-10 mb-[87px] font-bold min-w-[106px]">
                      View More
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[48%]">
                    <Img
                      src="images/img_06_branch_nvidia2_png.png"
                      alt="06branch_one"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-center w-[97%] pb-1">
              <div className="flex flex-col items-center justify-start w-full gap-[7px]">
                <div className="flex flex-row justify-center w-full pt-0.5 px-0.5">
                  <Heading size="md" as="h2" className="mx-72 text-center">
                    Hear What Our Customers Say
                  </Heading>
                </div>
                <div className="flex flex-row justify-center w-[19%]">
                  <Heading as="h3" className="mt-px !text-light_blue-500 text-center">
                    <span className="text-light_blue-500">Google Reviews </span>
                    <span className="text-white-A700">(View More)</span>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full mt-1">
              <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                <div className="h-[231px] w-full relative">
                  <div className="flex flex-row justify-center w-max h-full gap-[7px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row w-[96%] gap-[15px]">
                      <div className="flex flex-col items-center justify-start w-[33%] p-[19px] bg-gray-100 rounded">
                        <div className="flex flex-row justify-start w-full gap-px">
                          <Img
                            src="images/img_div_ti_profile_img_margin.png"
                            alt="1_week_ago_one"
                            className="w-1/5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-[81%] gap-px">
                            <div className="flex flex-row justify-center w-full">
                              <CheckBox
                                name="anisputra"
                                label="Anis Putra"
                                className="gap-[35px] text-black-900 font-opensans text-left font-bold"
                              />
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Text size="xs" as="p" className="!text-black-900 !font-opensans !text-[11.2px]">
                                1 week ago
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_span_ti_stars.svg" alt="1_week_ago" className="h-[17px] mt-3.5" />
                        <div className="flex flex-row justify-start w-full mt-2">
                          <Text size="xl" as="p" className="w-[95%] !text-black-900 !font-opensans">
                            All bussiness tru whatsapp, and just
                            <br />
                            pickup when ready.
                            <br />I bought CPU only, and everything was
                            <br />
                            already installed, the windows, parts…
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-full pt-1.5">
                          <Text
                            size="md"
                            as="p"
                            className="!text-black-900_87 !font-opensans !text-[13.5px] opacity-0.5"
                          >
                            Read more
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] p-[19px] bg-gray-100 rounded">
                        <div className="flex flex-row justify-center w-full">
                          <Img
                            src="images/img_div_ti_profile_img_margin.png"
                            alt="divtiprofile"
                            className="w-1/5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-[81%] gap-px">
                            <div className="flex flex-row justify-center w-full">
                              <CheckBox
                                name="davidwoo"
                                label="David Woo"
                                className="gap-[35px] text-black-900 font-opensans text-left font-bold"
                              />
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Text size="xs" as="p" className="!text-black-900 !font-opensans !text-[11.2px]">
                                1 week ago
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_span_ti_stars.svg" alt="image" className="h-[17px] mt-3.5" />
                        <div className="flex flex-row justify-start w-full mt-2">
                          <Text size="xl" as="p" className="w-[97%] !text-black-900 !font-opensans">
                            Bought the PC via their website.
                            <br />
                            Everything from building the PC to
                            <br />
                            delivering is very fast and the customer
                            <br />
                            service is really good. They even…
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-full pt-1.5">
                          <Text
                            size="md"
                            as="p"
                            className="!text-black-900_87 !font-opensans !text-[13.5px] opacity-0.5"
                          >
                            Read more
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] p-[19px] bg-gray-100 rounded">
                        <div className="flex flex-row justify-center w-full">
                          <Img
                            src="images/img_div_ti_profile_img_margin.png"
                            alt="divtiprofile"
                            className="w-1/5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-[81%] gap-px">
                            <div className="flex flex-row justify-center w-full">
                              <CheckBox
                                name="nurizzatirahaiz"
                                label="Nur Izzati Rahaizah"
                                className="gap-[35px] text-black-900 font-opensans text-left font-bold"
                              />
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Text size="xs" as="p" className="!text-black-900 !font-opensans !text-[11.2px]">
                                1 week ago
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_span_ti_stars.svg" alt="image" className="h-[17px] mt-3.5" />
                        <div className="flex flex-row justify-start w-full mt-2">
                          <Text size="xl" as="p" className="w-[89%] !text-black-900 !font-opensans">
                            Buat PC full set dengan 2monitor di
                            <br />
                            Ideal Tech. Masa dua hari pakai PSU
                            <br />
                            terbakar sebab factory defect tapi
                            <br />
                            Idealtech tapi dia hantar Idealtech…
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-full pt-1.5">
                          <Text
                            size="md"
                            as="p"
                            className="!text-black-900_87 !font-opensans !text-[13.5px] opacity-0.5"
                          >
                            Read more
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_div_ti_review_item.png"
                      alt="divtireview_one"
                      className="w-[4%] object-cover"
                    />
                  </div>
                  <Img
                    src="images/img_div_ti_controls.svg"
                    alt="divticontrols"
                    className="h-px top-[44%] right-0 left-0 m-auto absolute"
                  />
                </div>
                <div className="flex flex-row justify-center w-[97%]">
                  <div className="flex flex-row justify-start w-full pl-[357px] pr-14 gap-1">
                    <div className="flex flex-row justify-start w-[21%]">
                      <Heading as="h4" className="!text-black-900 !font-opensans text-center">
                        <span className="text-black-900">Google</span>
                        <span className="text-black-900 font-normal">rating score:</span>
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-[9%]">
                      <Heading as="h5" className="!text-black-900 !font-opensans text-center">
                        <span className="text-black-900">4.9</span>
                        <span className="text-black-900 font-normal">of 5,</span>
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-center w-[24%]">
                      <Text as="p" className="!text-black-900 !font-opensans text-center">
                        <span className="text-black-900">based on </span>
                        <span className="text-black-900 font-bold">1870 reviews</span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-[97%] mt-[46px] py-1">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-[15%]">
                  <Heading as="h6" className="!text-light_blue-500 text-center">
                    <span className="text-light_blue-500">Facebook </span>
                    <span className="text-white-A700">(View More)</span>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full pb-[15px]">
              <div className="flex flex-col items-center justify-start w-full gap-3.5">
                <div className="h-[237px] w-full relative">
                  <div className="flex flex-row justify-center w-max h-max gap-2 left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row w-[96%] gap-4">
                      <div className="flex flex-col items-center justify-start w-[33%] gap-[11px] p-[19px] bg-gray-100 rounded">
                        <div className="flex flex-row justify-center w-full">
                          <Img
                            src="images/img_div_ti_profile_img_margin.png"
                            alt="nope_hm_one"
                            className="w-1/5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-[81%] gap-px">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-between items-center w-full">
                                <Heading as="p" className="!text-black-900 !font-opensans">
                                  Nope Hm
                                </Heading>
                                <Button color="blue_A400" size="xs" variant="fill" className="w-5">
                                  <Img src="images/img_icon_svg.svg" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Text size="xs" as="p" className="!text-black-900 !font-opensans !text-[11.2px]">
                                1 month ago
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_span_ti_stars_blue_a400_01.svg"
                          alt="1_month_ago_one"
                          className="h-[17px]"
                        />
                        <div className="flex flex-row justify-center w-full mb-[25px]">
                          <Text size="xl" as="p" className="!text-black-900 !font-opensans">
                            Highly recommend in their servixes.
                            <br />
                            Person in shop are friendly and patience
                            <br />
                            in terms of explaining the specs and
                            <br />
                            recommend based on your needs.
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] gap-[11px] p-[19px] bg-gray-100 rounded">
                        <div className="flex flex-row justify-center w-full">
                          <Img
                            src="images/img_div_ti_profile_img_margin.png"
                            alt="divtiprofile"
                            className="w-1/5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-[81%] gap-px">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-between items-center w-full">
                                <Heading as="p" className="!text-black-900 !font-opensans">
                                  Tze Kay Phua
                                </Heading>
                                <Button color="blue_A400" size="xs" variant="fill" className="w-5">
                                  <Img src="images/img_icon_svg.svg" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Text size="xs" as="p" className="!text-black-900 !font-opensans !text-[11.2px]">
                                1 month ago
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_span_ti_stars_blue_a400_01.svg" alt="image" className="h-[17px]" />
                        <div className="flex flex-row justify-start w-full mb-[25px]">
                          <Text size="xl" as="p" className="w-[63%] !text-black-900 !font-opensans">
                            5 Star service
                            <br />5 star cable management
                            <br />4 Star price
                            <br />5 star everything else
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] p-[19px] bg-gray-100 rounded">
                        <div className="flex flex-row justify-center w-full">
                          <Img
                            src="images/img_div_ti_profile_img_margin.png"
                            alt="divtiprofile"
                            className="w-1/5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-[81%] gap-px">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-between items-center w-full">
                                <Heading as="p" className="!text-black-900 !font-opensans">
                                  Patrick Peng
                                </Heading>
                                <Button color="blue_A400" size="xs" variant="fill" className="w-5">
                                  <Img src="images/img_icon_svg.svg" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Text size="xs" as="p" className="!text-black-900 !font-opensans !text-[11.2px]">
                                1 month ago
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_span_ti_stars_blue_a400_01.svg" alt="image" className="h-[17px] mt-3.5" />
                        <div className="flex flex-row justify-center w-full mt-2">
                          <Text size="xl" as="p" className="!text-black-900 !font-opensans">
                            The after-sales service of Ideal Tech is
                            <br />
                            excellent. Response from WhatsApp was
                            <br />
                            fast to any inquiries. Run into some RAM
                            <br />
                            problem. Went to Ideal Tech PJ Branch…
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-full pt-1.5">
                          <Text
                            size="md"
                            as="p"
                            className="!text-black-900_87 !font-opensans !text-[13.5px] opacity-0.5"
                          >
                            Read more
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img src="images/img_div_ti_review_item.png" alt="divtireview" className="w-[4%] object-cover" />
                  </div>
                  <Img
                    src="images/img_div_ti_controls.svg"
                    alt="divticontrols"
                    className="h-px top-[45%] right-0 left-0 m-auto absolute"
                  />
                </div>
                <div className="flex flex-row justify-center w-[97%]">
                  <div className="flex flex-row justify-start w-full pl-[347px] pr-14 gap-1">
                    <div className="flex flex-row justify-start w-[24%]">
                      <Heading as="p" className="!text-black-900 !font-opensans text-center">
                        <span className="text-black-900">Facebook</span>
                        <span className="text-black-900 font-normal">rating score:</span>
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-[9%]">
                      <Heading as="p" className="!text-black-900 !font-opensans text-center">
                        <span className="text-black-900">4.8</span>
                        <span className="text-black-900 font-normal">of 5,</span>
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-[24%]">
                      <Text as="p" className="!text-black-900 !font-opensans text-center">
                        <span className="text-black-900">based on </span>
                        <span className="text-black-900 font-bold">2405 reviews</span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full pb-[200px] max-w-[1074px]">
          <div className="flex flex-row justify-center w-full pt-[84px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-[81%]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-full">
                    <div className="h-[477px] w-full relative">
                      <Img
                        src="images/img_client_vid_thumb_png.png"
                        alt="clientvid_one"
                        className="justify-center h-[477px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                      />
                      <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 py-[109px] m-auto bg-black-900_7f absolute rounded-[20px]">
                        <Img src="images/img_link_svg.svg" alt="linksvg_one" className="h-[100px] w-[100px]" />
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row justify-center w-full py-2">
                            <div className="flex flex-row justify-center w-full">
                              <Heading size="lg" as="h2" className="w-[93%] !font-lato text-center">
                                {`Malaysia's Biggest Gaming PC & Workstation`}
                                <br />
                                Builders
                              </Heading>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row justify-center w-[86%]">
                              <Text size="2xl" as="p" className="mx-[31px] !font-lato text-center">
                                IDEAL TECHNOLOGY TRADING started its business at Malaysia on 5th July 2007, as a trading
                                <br />
                                {`company that sell's and distributes Gadgets, GPS and Computer Components.`}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
