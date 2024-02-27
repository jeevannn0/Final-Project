import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import Header from "../../components/Header";

export default function GalileodesignPage() {
  return (
    <>
      <Helmet>
        <title>Xenoz 69's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-black-900">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <header className="flex w-full" />
            <div className="flex flex-row justify-start w-full mt-[-79px] py-2 max-w-[1424px]">
              <div className="flex flex-row justify-start w-[99%] mb-[17px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-[81%] py-2">
                    <div className="flex flex-row justify-start items-center w-full">
                      <Img
                        src="images/img_div_elementor_widget_wrap.png"
                        alt="divelementor"
                        className="w-[5%] object-cover"
                      />
                      <div className="flex flex-row justify-start w-[77%]">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-row justify-center items-center w-[17%] p-3.5">
                                <a
                                  href="https://idealtech.com.my/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="ml-[30px]"
                                >
                                  <Heading size="s" as="h1" className="!font-roboto !text-sm">
                                    About
                                  </Heading>
                                </a>
                                <Img
                                  src="images/img_span_sub_arrow_margin.svg"
                                  alt="spansubarrow"
                                  className="h-3.5 mr-[30px]"
                                />
                              </div>
                              <div className="flex flex-row justify-center w-[26%] p-3.5">
                                <a
                                  href="https://build.idealtech.com.my/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="mx-[30px]"
                                >
                                  <Heading size="s" as="h2" className="!font-roboto !text-sm">
                                    Customize Your Own
                                  </Heading>
                                </a>
                              </div>
                              <div className="flex flex-row justify-center items-center w-1/5 p-[13px]">
                                <a
                                  href="https://idealtech.com.my/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="mt-0.5 ml-[31px]"
                                >
                                  <Heading size="s" as="h3" className="!font-roboto !text-sm">
                                    Shop Now
                                  </Heading>
                                </a>
                                <Img
                                  src="images/img_span_sub_arrow_margin.svg"
                                  alt="spansubarrow"
                                  className="h-3.5 mr-[31px]"
                                />
                              </div>
                              <div className="flex flex-row justify-center items-center w-[19%] p-[13px]">
                                <a
                                  href="https://idealtech.com.my/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="mt-0.5 ml-[31px]"
                                >
                                  <Heading size="s" as="h4" className="!font-roboto !text-sm">
                                    Support
                                  </Heading>
                                </a>
                                <Img
                                  src="images/img_span_sub_arrow_margin.svg"
                                  alt="spansubarrow"
                                  className="h-3.5 mr-[31px]"
                                />
                              </div>
                              <div className="flex flex-row justify-center items-center w-[21%] p-3.5">
                                <a
                                  href="https://idealtech.com.my/contact-us/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="ml-[29px]"
                                >
                                  <Heading size="s" as="h5" className="!font-roboto !text-sm">
                                    Contact Us
                                  </Heading>
                                </a>
                                <Img
                                  src="images/img_span_sub_arrow_margin.svg"
                                  alt="spansubarrow"
                                  className="h-3.5 mr-[29px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img src="images/img_search.svg" alt="search_one" className="h-[47px] ml-px" />
                      <div className="flex flex-row justify-start w-[9%]">
                        <div className="flex flex-row justify-start w-full mb-3.5">
                          <div className="flex flex-row justify-end w-full px-[30px]">
                            <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                              <div className="flex flex-col items-start justify-start h-[30px] w-[30px]">
                                <a
                                  href="https://idealtech.com.my/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex justify-center items-center h-4 w-4 ml-3.5 z-[1] bg-red-400 rounded-[50%]"
                                >
                                  <Heading as="h6" className="!font-roboto text-center !text-[10px] !font-semibold">
                                    0
                                  </Heading>
                                </a>
                                <Img src="images/img_before.svg" alt="before_one" className="h-[18px] mt-[-4px]" />
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
        <Header className="flex flex-col items-center justify-start w-full mt-[15px] gap-[63px]" />
        <footer className="flex justify-center items-center w-full pt-[60px] pb-16 px-14 border-deep_orange-A700 border-t-4 border-solid bg-gray-800_6d">
          <div className="flex flex-row justify-center w-full mb-3 mx-auto max-w-[1049px]">
            <div className="flex flex-col items-center justify-center w-full gap-[34px]">
              <div className="flex flex-row justify-end w-[64%]">
                <div className="flex flex-row justify-start w-full gap-7">
                  <div className="flex flex-row justify-start w-[51%]">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-5">
                        <Heading as="p" className="w-[96%] !font-lato">
                          <span className="text-white-A700">
                            IDEAL TECH PC Sdn Bhd (HQ):
                            <br />
                          </span>
                          <span className="text-white-A700 font-normal">
                            No. 17 Jalan Pandan Prima 1, Dataran Pandan Prima,
                            <br />
                            55100 Kuala Lumpur
                            <br />
                            Phone: +603 9202 3137
                            <br />
                            Sales: +6012 578 7804
                            <br />
                            Warranty: +6012 427 8782
                          </span>
                        </Heading>
                        <Heading as="p" className="!font-lato">
                          <span className="text-white-A700">
                            IDEAL TECH PC Sdn Bhd (JB) (Opening in Feb / March
                            <br />
                            2024):
                            <br />
                          </span>
                          <span className="text-white-A700 font-normal">
                            53, Jalan Austin Height 8/8, Taman Mount Austin
                            <br />
                            81100, Johor Bahru, Johor
                            <br />
                            Phone: +607 357 9498
                            <br />
                            Sales: +6016 854 1253
                          </span>
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[45%]">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full gap-5">
                        <Heading as="p" className="w-[83%] !font-lato">
                          <span className="text-white-A700">
                            IDEAL TECH Services Sdn Bhd (PJ SS2):
                            <br />
                          </span>
                          <span className="text-white-A700 font-normal">
                            42, Jalan SS 2/55, SS2,
                            <br />
                            47300, Petaling Jaya, Selangor
                            <br />
                            Phone: +603 7876 0076
                            <br />
                            Sales: +6017 865 0076
                            <br />
                            Warranty: +6010 391 0076
                          </span>
                        </Heading>
                        <Heading as="p" className="w-[98%] mb-[19px] !font-lato">
                          <span className="text-white-A700">
                            IDEAL TECH Services Sdn Bhd (Setia Taipan 2):
                            <br />
                          </span>
                          <span className="text-white-A700 font-normal">
                            No.36G, Jalan Setia Utama U13/AU,
                            <br />
                            Setia Alam Seksyen U13, 40170 Shah Alam.
                            <br />
                            Phone: +603-3358 3713
                            <br />
                            Sales / Warranty: +6012 610 1871
                          </span>
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end w-full">
                <div className="flex flex-row justify-center w-full border-gray-100 border-t border-solid">
                  <div className="flex flex-row justify-center w-1/2 ml-0.5">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-row justify-start w-[89%]">
                        <div className="flex flex-row justify-center w-[22%] p-3.5">
                          <a
                            href="https://idealtech.com.my/about-us/"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-[5px]"
                          >
                            <Heading size="s" as="p" className="!font-roboto !text-sm">
                              About Us
                            </Heading>
                          </a>
                        </div>
                        <div className="flex flex-row justify-center w-[28%] p-3.5">
                          <a
                            href="https://idealtech.com.my/terms-of-use/"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-[5px]"
                          >
                            <Heading size="s" as="p" className="!font-roboto !text-sm">
                              Terms Of Use
                            </Heading>
                          </a>
                        </div>
                        <div className="flex flex-row justify-center w-[28%] p-[13px]">
                          <a
                            href="https://idealtech.com.my/warranty-info/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-0.5 mx-1.5"
                          >
                            <Heading size="s" as="p" className="!font-roboto !text-sm">
                              Warranty Info
                            </Heading>
                          </a>
                        </div>
                        <div className="flex flex-row justify-center w-[24%] p-3.5">
                          <a
                            href="https://idealtech.com.my/contact-us/"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-[5px]"
                          >
                            <Heading size="s" as="p" className="!font-roboto !text-sm">
                              Contact Us
                            </Heading>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-1/2 mr-0.5 pb-[13px]">
                    <div className="flex flex-row justify-center w-full pt-3.5">
                      <div className="flex flex-row justify-end w-full">
                        <Text size="s" as="p" className="!text-white-A700_54 !font-roboto text-right">
                          © [2018-2023] IDEAL TECH PC SDN BHD 201401008251 (1084329-M). All Rights Reserved.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
