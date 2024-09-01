import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import CustomTablePDF from "./CustomTablePDF";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const fields = [
  {
    title: " Agent Name",
    custom: true,
    component: (item) => `${item.agent_name}`,
    width: "30",
  },
  {
    title: " Policy No",
    custom: true,
    component: (item) => `${item.policy_no}`,
    width: "35",
  },
  {
    title: "Policy Class",
    value: "policy_class",
    width: "20",
  },
  {
    title: "Amount",
    custom: true,
    style: { textAlign: "right" },
    className: "text-right",
    component: (item) => `${item.contribution}`,
    width: "15",
  },
];

const data = [
  {
    agent_name: " Agent Name=",
    policy_no: "Hola",
    policy_class: "Hola",
    contribution: "contribution",
  },
];

// Create Document Component
const MyPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #12</Text>
        <CustomTablePDF fields={fields} data={data} />
      </View>
    </Page>
  </Document>
);

export default MyPdf;
