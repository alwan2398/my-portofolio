"use client";
import React from "react";
import AnimationContainer from "../utils/animation-container";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  return (
    <div id="contact" className="w-full relative pt-10 pb-40 z-40">
      <AnimationContainer animation="slide-up" delay={0.1}>
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Get In Touch
          </h2>
        </div>
      </AnimationContainer>

      <div className="flex flex-col items-center justify-center gap-5 pt-10 w-full">
        <div className="flex flex-col items-center justify-center w-full gap-5 lg:flex-row">
          <Link
            href="mailto:sihasaneshreyas@gmail.com"
            className="flex-[0.5] w-full lg:w-auto"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5 hover:scale-100"
            >
              <h6 className="text-base font-medium">Email</h6>
              <p className="mt-2 text-base text-foreground/70">
                sihasaneshreyas@gmail.com
              </p>
            </Button>
          </Link>
          <Link
            href="https://wa.link/c8re0h"
            className="flex-[0.5] w-full lg:w-auto"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5 hover:scale-100"
            >
              <h6 className="text-base font-medium">Phone</h6>
              <p className="mt-2 text-base text-foreground/70">
                +91 932 235 6392
              </p>
            </Button>
          </Link>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((e) => handleSubmit(e))}
            className="flex flex-col items-center justify-center w-full space-y-5"
          >
            <AnimationContainer
              animation="slide-up"
              delay={0.2}
              className="w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        // disabled={isLoading}
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        className="h-12 px-5 capitalize outline-none rounded-lg hover:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage>
                      <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form.formState.errors.name &&
                          form.formState.errors.name.message}
                      </motion.span>
                    </FormMessage>
                  </FormItem>
                )}
              />
            </AnimationContainer>
            <AnimationContainer
              animation="slide-up"
              delay={0.3}
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem
                      className={cn(
                        "w-full mb-0",
                        form.formState.errors.phone && "mb-5"
                      )}
                    >
                      <FormControl>
                        <Input
                          {...field}
                          // disabled={isLoading}
                          required
                          type="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                          className="h-12 px-5 outline-none rounded-lg hover:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage>
                        <motion.span
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {form.formState.errors.email &&
                            form.formState.errors.email.message}
                        </motion.span>
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem
                      className={cn(
                        "w-full mb-0",
                        form.formState.errors.email && "mb-5"
                      )}
                    >
                      <FormControl>
                        <Input
                          {...field}
                          //   // disabled={isLoading}
                          required
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          autoComplete="off"
                          className="h-12 px-5 outline-none rounded-lg hover:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage>
                        <motion.span
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {form.formState.errors.phone &&
                            form.formState.errors.phone.message}
                        </motion.span>
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </AnimationContainer>
            <AnimationContainer
              animation="slide-up"
              delay={0.4}
              className="w-full"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea
                        {...field}
                        // // disabled={isLoading}
                        required
                        rows={5}
                        name="message"
                        placeholder="Message..."
                        autoComplete="off"
                        className="w-full p-5 outline-none resize-none rounded-lg hover:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage>
                      <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form.formState.errors.message &&
                          form.formState.errors.message.message}
                      </motion.span>
                    </FormMessage>
                  </FormItem>
                )}
              />
            </AnimationContainer>
            <AnimationContainer
              animation="slide-up"
              delay={0.5}
              className="w-full"
            >
              <div className="flex items-center justify-center w-full mx-auto">
                <Button
                //   isSent={isSent}
                //   isLoading={isLoading}
                //   setIsSent={setIsSent}
                //   disabled={form.formState.disabled}
                >
                  Send
                </Button>
              </div>
            </AnimationContainer>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
