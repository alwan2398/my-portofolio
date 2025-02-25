"use client";
import React, { useState } from "react";
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
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama wajib diisi" }),
  email: z.string().email({ message: "Email tidak valid" }),
  phone: z.string().min(10, { message: "Nomor handphone tidak valid" }),
  message: z.string().min(3, { message: "Pesan wajib diisi" }),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone_number: data.phone,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      form.reset();
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error("Error mengirim email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full relative pt-10 pb-40 z-40">
      <AnimationContainer animation="slide-up" delay={0.1}>
        <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
          Mari Berkolaborasi
        </h2>
      </AnimationContainer>

      <div className="flex flex-col items-center justify-center gap-5 pt-10 w-full">
        <div className="flex flex-col items-center justify-center w-full gap-5 lg:flex-row">
          <Link
            href="mailto:muhammadalwan3220@gmail.com"
            className="flex-[0.5] w-full lg:w-auto"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5 hover:scale-100"
            >
              <h6 className="text-base font-medium">Email</h6>
              <p className="mt-2 text-base text-foreground/70">
                muhammadalwan3220@gmail.com
              </p>
            </Button>
          </Link>
          <Link
            href="https://wa.link/9zx4bv"
            className="flex-[0.5] w-full lg:w-auto"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5 hover:scale-100"
            >
              <h6 className="text-base font-medium">Whatsapp</h6>
              <p className="mt-2 text-base text-foreground/70">
                +62 859 0435 1897
              </p>
            </Button>
          </Link>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full space-y-5"
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
                        disabled={isLoading}
                        placeholder="Nama"
                        className="h-12 px-5 rounded-lg hover:border-indigo-500"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.name?.message}
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
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isLoading}
                          placeholder="Email"
                          className="h-12 px-5 rounded-lg hover:border-indigo-500"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.email?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isLoading}
                          placeholder="Nomor HP"
                          className="h-12 px-5 rounded-lg hover:border-indigo-500"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.phone?.message}
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
                        disabled={isLoading}
                        placeholder="Pesan Anda..."
                        rows={5}
                        className="w-full p-5 rounded-lg hover:border-indigo-500"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.message?.message}
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
              <div className="flex justify-center w-full">
                <Button type="submit" disabled={isLoading || isSent}>
                  {isLoading
                    ? "Mengirim..."
                    : isSent
                      ? "Pesan Terkirim"
                      : "Kirim Pesan"}
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
