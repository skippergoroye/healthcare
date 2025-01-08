"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import Calender from "@/public/assets/icons/calendar.svg";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  RADIO = "radio",
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  render?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {/* {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={60}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )} */}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="text-white w-full h-11 rounded-md px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        // <FormControl>
        //   <div className="flex w-full items-center gap-3">
        //     <div className="flex items-center">
        //       <PhoneInput
        //         defaultCountry="US"
        //         international
        //         withCountryCallingCode
        //         value={field.value as E164Number | undefined}
        //         onChange={field.onChange}
        //         className="text-white w-14 mt-2 h-11 rounded-md px-3 text-sm border bg-dark-400 border-dark-500"
        //       />
        //     </div>

        //     <input
        //       type="tel"
        //       value={field.value}
        //       onChange={field.onChange}
        //       placeholder={props.placeholder}
        //       className="text-white w-full mt-2 h-11 rounded-md px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
        //     />
        //   </div>
        // </FormControl>

        <FormControl>
          <div className="flex w-full items-center gap-3">
            <div className="flex items-center">
              <PhoneInput
                defaultCountry="US"
                international
                withCountryCallingCode
                value={field.value as E164Number | undefined}
                onChange={field.onChange}
                className="text-white w-14 h-11 rounded-md px-3 text-sm border bg-dark-400 border-dark-500"
              />
            </div>

            <input
              type="tel"
              value={field.value}
              onChange={field.onChange}
              placeholder={props.placeholder}
              className="text-white w-full h-11 rounded-md px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
              // className="text-white w-full h-11 rounded-md px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
            />
          </div>
        </FormControl>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
      return (

        <div className="flex rounded-md border border-dark-500 bg-dark-400 text-white">
          <Image
            src={Calender}
            height={24}
            width={24}
            alt="user"
            className="ml-2"
          />
          <FormControl>
            <ReactDatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              selected={field.value}
              onChange={(date ) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
        // <div className="flex rounded-md border border-dark-500 bg-dark-400">
        //   <Image
        //     src={Calender}
        //     height={24}
        //     width={24}
        //     alt="user"
        //     className="ml-2"
        //   />
        //   <FormControl className="text-white">
        //     <ReactDatePicker
        //       showTimeSelect={props.showTimeSelect ?? false}
        //       selected={field.value}
        //       onChange={(date) => field.onChange(date)}
        //       timeInputLabel="Time:"
        //       dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
        //       wrapperClassName="date-picker"
        //     />
        //   </FormControl>
        // </div>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger text-white">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content text-white">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );



      case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value} 
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );

    case FormFieldType.RADIO:
      return props.render ? props.render(field) : null;

    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-input-label">{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
